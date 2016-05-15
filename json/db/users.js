/**
 * Created by cshlovjah on 15.05.16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testPost');

var User = require('./User'),
    Post = require('./Post');


var alex = new User({
    name: "Alex"
});

var joe = new User({
    name: "Joe"
});


var users = [
    alex,
    joe
];

function savedb(users, callback){
    for(var i=0 ;i < users.length; i++ ){
        users[i].save(function (err) {
            if (err) return console.log(err);
            console.log(i);
            callback();
        });
    }
}

savedb(users,function(){
    mongoose.disconnect()
});