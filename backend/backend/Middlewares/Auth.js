
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    // Check if 'Authorization' header exists and contains 'Bearer <token>'
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
    }

    // Split the header to get the token (Bearer <token>)
    const token = authHeader.split(' ')[1];  // This splits "Bearer <token>"

    if (!token) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
    }

    try {
        // Verify the token using JWT secret
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to the request
        next(); // Pass to the next middleware or route handler
    } catch (err) {
        return res.status(403).json({ message: 'Unauthorized, JWT token wrong or expired' });
    }
};

module.exports = ensureAuthenticated;
