//manages relationships between data, provides schema validation, and is used to translate between objects in code
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//add a username, hash and salt field to store the username, the hashed password and the salt value
const passportLocalMongoose = require('passport-local-mongoose');


const Account = new Schema({
    username: String, 
    password: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('account', Account);