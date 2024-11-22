const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Map to store users and rooms
const rooms = {};

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle user joining a room (like a WhatsApp chat with a unique room ID)
  socket.on('joinRoom', ({ userId, roomId }) => {
    // Check if the room exists, if not create a new room
    if (!rooms[roomId]) {
      rooms[roomId] = [];
    }

    // Add user to the room
    rooms[roomId].push({ userId, socketId: socket.id });

    // Join the room
    socket.join(roomId);

    console.log(`${userId} joined room: ${roomId}`);
  });

  // Handle sending a message to the room
  socket.on('sendMessage', ({ userId, roomId, message }) => {
    // Broadcast the message to everyone in the room
    io.to(roomId).emit('receiveMessage', { userId, message });
    console.log(`Message from ${userId} to room ${roomId}: ${message}`);
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    // Remove user from all rooms
    for (let roomId in rooms) {
      const room = rooms[roomId];
      const userIndex = room.findIndex(user => user.socketId === socket.id);
      if (userIndex !== -1) {
        const [removedUser] = room.splice(userIndex, 1);
        console.log(`${removedUser.userId} disconnected from room ${roomId}`);
        break;
      }
    }
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
