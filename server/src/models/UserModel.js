const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, requied: true, unique: true },
    password: { type: String, required: true },
    roles: [{ type: String, ref: 'RoleModel' }],
    email: { type: String, default: '' },
    age: { type: Number, default: 0 },
    friends: { type: Array, default: [] },
    games: { type: Array, default: [] }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = { UserModel };
