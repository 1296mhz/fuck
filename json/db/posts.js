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
/*
for (var i=0 ;i < 100; i++ ){
     joe[i] = new User({
        name: "Joe"+[i]
    });
    users.push(joe[i]);
}
*/
//console.log(users.length);

function savedb(users, callback) {
    for (var i = 0; i < users.length; i++) {
        users[i].save(function (err) {
            if (err) return console.log(err);
            callback();
        });
    }
}

savedb(users,function(){
    mongoose.disconnect()
});


var post = new Post({
    title: "Hello World",
    postedBy: alex._id,
    comments: [{
        text: "Nice post!",
        postedBy: joe._id
    }, {
        text: "Thanks :)",
        postedBy: alex._id
    }]
});

post.save(function(error) {
    if (!error) {
        Post.find({})
            .populate('postedBy')
            .populate('comments.postedBy')
            .exec(function(error, posts) {
                console.log(JSON.stringify(posts, null, "\t"))
            })
    }
});
