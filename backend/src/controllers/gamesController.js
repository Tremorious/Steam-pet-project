const { GameModel } = require('../models/GameModel');
const { UserModel } = require('../models/UserModel');

const createGame = async (req, res) => {
    try {
        const { name, price, tag, description, image } = req.body;

        if (!name || !price || !tag) {
            throw new Error('Provide name, tag and price for this game');
        }

        const isAllreadyExist = await GameModel.findOne({ name });

        if (isAllreadyExist) {
            throw new Error('This game allready exist');
        }

        const game = new GameModel({ name, tag, price, image, description });
        await game.save();
        return res.status(200).json({ message: 'Game was created' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllGames = async (req, res) => {
    try {
        const gamesList = await GameModel.find();
        res.status(200).send(gamesList);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
};

const addGame = async (req, res) => {
    try {
        const _id = req.params.id;
        const { gameId } = req.body;

        if (!gameId) {
            throw new Error('Game with this id does not exist');
        }

        const foundUser = await UserModel.findOne({ _id });

        if (foundUser.games.includes(gameId)) {
            throw new Error('This game is allready in your library');
        }

        foundUser.games.push(gameId);

        await foundUser.save();
        res.status(200).json({ message: 'Game was added to your library' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
};

const removeGame = async (req, res) => {
    try {
        const _id = req.params.id;
        const { gameId } = req.body;

        if (!gameId) {
            throw new Error('Game with this id does not exist');
        }

        const foundUser = await UserModel.findOne({ _id });
        const index = foundUser.games.indexOf(gameId);
        if (index === -1) {
            throw new Error("This game isn't in your library");
        }
        foundUser.games.splice(index, 1);

        await foundUser.save();
        res.status(200).json({ message: 'Game was removed from your library' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
};

const getAllUserGames = async (req, res) => {
    try {
        const _id = req.params.id;
        const { games } = await UserModel.findOne({ _id }, 'games');
        const responce = await getGameParamsById(games);
        res.status(200).send(responce);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getGameParamsById = async (id) => {
    return await GameModel.find({ _id: id });
};

module.exports = {
    createGame,
    getAllGames,
    addGame,
    getAllUserGames,
    removeGame
};
