const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// Signup Route
router.post('/signup', signupValidation, signup);

// Login Route
router.post('/login', loginValidation, login);

// Optional: Handle invalid routes
router.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
