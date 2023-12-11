const mongoose = require('mongoose');

const userLoginSchema = mongoose.Schema({
	username: String,
    password: String,
    token: String,
    canBook: Boolean,
    canEdit: Boolean,
});

const UserLogin = mongoose.model('userslogins', userLoginSchema);

module.exports = UserLogin;