const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: { type: String, unique: true, requied: true },
    tag: { type: String, required: true },
    price: { type: String, requied: true },
    image: { type: String, requied: true },
    image_small: { type: String, requied: true },
    image_logo: { type: String, required: true },
    description: { type: String, required: true }
});

const GameModel = mongoose.model('games', GameSchema);

module.exports = {
    GameModel
};
