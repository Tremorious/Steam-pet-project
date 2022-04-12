const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: { type: String, unique: true, requied: true },
    tag: { type: String, required: true },
    price: { type: Number, requied: true },
    image: { type: String, requied: true },
    description: { type: String, required: true }
});

const GameModel = mongoose.model('games', GameSchema);

module.exports = {
    GameModel
};
