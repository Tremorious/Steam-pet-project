const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { secret } = require('../config');
const { UserModel } = require('../models/UserModel');
const { RoleModel } = require('../models/RoleModel');

const registration = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: 'Failed to register' });
        }
        const { username, password } = req.body;
        const isAllreadyRegistered = await UserModel.findOne({ username });
        if (isAllreadyRegistered) {
            return res.status(400).json({ message: 'User with this username allready exists ' });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const userRole = await RoleModel.findOne({ value: 'USER' });
        const user = new UserModel({ username, password: hashedPassword, roles: [userRole.value] });
        await user.save();
        return res.status(200).json({ message: 'User was created' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
    }
};
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: `User with login: ${username} does not exist` });
        }
        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) {
            return res.status(500).json({ message: 'Password is invalid' });
        }
        const token = generateToken(user.username, user._id, user.roles);
        res.header('auth-token', token).json(token);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
    }
};

const getUsers = async (req, res) => {
    try {
        res.json('server works');
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
    }
};

const generateToken = (username, id, roles) => {
    const payload = {
        username,
        id,
        roles
    };
    return jwt.sign(payload, secret, { expiresIn: '24h' });
};

module.exports = {
    registration,
    login,
    getUsers
};
