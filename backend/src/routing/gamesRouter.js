const express = require('express');
const gamesRouter = express.Router();
const { createGame, addGame, removeGame, getAllGames, getAllUserGames } = require('../controllers/gamesController');

gamesRouter.post('/create', createGame);
gamesRouter.patch('/add/:id', addGame);
gamesRouter.patch('/remove/:id', removeGame);
gamesRouter.get('', getAllGames);
gamesRouter.get('/:id', getAllUserGames);

module.exports = {
    gamesRouter
};
