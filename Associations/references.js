var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

var User = require("./models/user");

// Post.create({
// 	title: "How to cook the best burger Pt.4",
// 	content: "Cook the burger again"
// }, function(err, post){
// 	User.findOne({email: "generic@gen.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

// Find user
// find all posts for that user

User.findOne({email: "generic@gen.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});


// User.create({
// 	email: "generic@gen.com",
// 	name: "Generic Name"
// });