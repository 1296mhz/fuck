/**
 * Created by cshlovjah on 15.05.16.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("User", UserSchema);