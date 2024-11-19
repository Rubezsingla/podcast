const Joi = require('joi');

// Signup validation
const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required().messages({
            'string.base': 'Name must be a string',
            'string.min': 'Name must be at least 3 characters long',
            'string.max': 'Name cannot exceed 100 characters',
            'any.required': 'Name is required',
        }),
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Please provide a valid email address',
            'any.required': 'Email is required',
        }),
        password: Joi.string().min(4).max(100).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least 4 characters long',
            'string.max': 'Password cannot exceed 100 characters',
            'any.required': 'Password is required',
        })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(err => err.message).join(', ');
        return res.status(400).json({ message: 'Bad request', error: errorMessage });
    }
    next();
};

// Login validation
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.base': 'Email must be a string',
            'string.email': 'Please provide a valid email address',
            'any.required': 'Email is required',
        }),
        password: Joi.string().min(4).max(100).required().messages({
            'string.base': 'Password must be a string',
            'string.min': 'Password must be at least 4 characters long',
            'string.max': 'Password cannot exceed 100 characters',
            'any.required': 'Password is required',
        })
    });

    const { error } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map(err => err.message).join(', ');
        return res.status(400).json({ message: 'Bad request', error: errorMessage });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};
