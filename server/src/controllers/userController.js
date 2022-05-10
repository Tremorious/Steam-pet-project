const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/UserModel');

const getUserCredentials = async (req, res) => {
    try {
        const _id = req.params.id;
        const foundUser = await UserModel.findOne({ _id });

        if (foundUser) {
            const { username, email, age } = foundUser;
            res.status(200).json({ username, email, age });
        } else {
            res.status(400).json({ message: 'User does not exist' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Cannot get user' });
    }
};

const updateUserCredentrials = async (req, res) => {
    try {
        const { email, age, username } = req.body;
        const _id = req.params.id;
        const foundUser = await UserModel.findOne({ _id });
        foundUser.age = age;
        foundUser.email = email;
        foundUser.username = username;

        await foundUser.save();
        res.status(200).json({ message: 'Success' });
    } catch (err) {
        res.status(400).json({ message: 'Something went wrong' });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const _id = req.params.id;
        const foundUser = await UserModel.findOne({ _id });
        let users = await UserModel.find();

        users = users
            .map((user) => {
                return {
                    username: user.username,
                    isFriend: isAllreadyFriend(foundUser.friends, user.username)
                };
            })
            .filter((user) => user.username !== foundUser.username);

        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Something went wrong' });
    }
};

const addFriend = async (req, res) => {
    try {
        const { username } = req.body;
        const _id = req.params.id;
        const foundUser = await UserModel.findOne({ _id });
        const requestFriendshipUser = await UserModel.findOne({ username: username });

        const id = requestFriendshipUser._id;

        const isForbiddenToAdd = foundUser.friends.filter((friend) => friend.username === username).length;

        if (isForbiddenToAdd) {
            throw new Error(`"${username}" is allready your in your friendlist`);
        }

        foundUser.friends.push({ username, id });

        await foundUser.save();
        res.status(200).json({ message: `'${username}' has been added to your friendlist!` });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const removeFriend = async (req, res) => {
    try {
        const { username } = req.body;
        const _id = req.params.id;
        const foundUser = await UserModel.findOne({ _id });

        const index = foundUser.friends.findIndex((friend) => friend.username === username);

        if (index !== -1) {
            foundUser.friends.splice(index, 1);

            await foundUser.save();
            res.status(200).json({ message: 'Removed from your friendlist' });
        } else {
            throw new Error(`"${username}" is not your friend`);
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

function isAllreadyFriend(arr, name) {
    let flag = false;
    arr.forEach((user) => {
        if (user.username === name) {
            flag = true;
        }
    });
    return flag;
}

module.exports = {
    getUserCredentials,
    updateUserCredentrials,
    getAllUsers,

    addFriend,
    removeFriend
};
