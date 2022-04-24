const express = require('express');
const authRouter = express.Router();
const { registration, login, getUsers } = require('../controllers/authController');
const { check } = require('express-validator');

authRouter.post(
    '/registration',
    [
        check('username', 'Username cannot be empty').notEmpty(),
        check('password', 'Password length must be in range 4-10 characters').isLength({ min: 4, max: 10 })
    ],
    registration
);
authRouter.post('/login', login);

authRouter.get('/users', getUsers);

module.exports = {
    authRouter
};
