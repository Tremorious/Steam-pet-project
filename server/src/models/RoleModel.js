const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    value: { type: String, unique: true, default: 'USER' }
});

const RoleModel = mongoose.model('roles', RoleSchema);

module.exports = {
    RoleModel
};
