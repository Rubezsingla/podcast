const express = require('express');
const app = express();
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require('./Models/db');  // Ensure DB connection is handled here
const PORT = process.env.PORT || 5000;

// Ping route for checking server status
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(express.json());  // Built-in Express middleware for parsing JSON bodies
app.use(cors());          // Enable Cross-Origin Requests

// Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Catch-all error handler for unexpected routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler for unhandled errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
