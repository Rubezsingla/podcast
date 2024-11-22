import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  // The correct password (you can store this securely on a server in a real application)
  const correctPassword = 'yourPassword123'; 

  const handleAddMessage = () => {
    if (!message) {
      alert('Please enter a message.');
      return;
    }

    // Validate the password before adding the notification
    if (password !== correctPassword) {
      alert('Incorrect password! You cannot add a notification.');
      return;
    }

    // Get the current time in a readable format
    const currentTime = new Date().toLocaleTimeString();

    // Create a new notification with the message and timestamp
    const newNotification = `${message} (Sent at: ${currentTime})`;

    // Add the new notification to the list
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);

    // Clear the input fields
    setMessage('');
    setPassword('');
  };

  return (
    <div className="contact">
      <h1>Notification Center</h1>

      {/* Password input section */}
      <div className="password-section">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>

      {/* Message input section */}
      <div className="input-section">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button onClick={handleAddMessage}>Add Message</button>
      </div>

      {/* Notifications display area */}
      <div className="notification-area">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="notification blinking-text">
              <strong>Notification {index + 1}:</strong> {notification}
            </div>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
