/**
 * Created by cshlovjah on 12.05.16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Account = new Schema({
    username: String,
    password: String,
    role: String,
    boxid: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);