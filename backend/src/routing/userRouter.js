const express = require('express');
const userRouter = express.Router();
const {
    getUserCredentials,
    updateUserCredentrials,
    getAllUsers,
    addFriend,
    removeFriend
} = require('../controllers/userController');

userRouter.get('/profile/:id', getUserCredentials);
userRouter.patch('/profile/:id', updateUserCredentrials);

userRouter.get('/friends/:id', getAllUsers);
userRouter.patch('/friends/add/:id', addFriend);
userRouter.patch('/friends/remove/:id', removeFriend);

module.exports = {
    userRouter
};
