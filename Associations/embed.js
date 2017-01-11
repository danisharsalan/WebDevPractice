var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
// 	email: "tracer@overwatch.com",
// 	name: "Tracer Ana"
// });

// newUser.posts.push({
// 	title: "How to carry 101",
// 	content: "Play me and bully the backline"
// });
// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Oranges",
// 	content: "THEY are uly af boi"
// });
// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "Tracer Ana"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		user.posts.push({
			title: "How to get out of ELO hell",
			content: "You don\'t."
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});