var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

// "/fallinlovewith/dogs" has html saying "You have fallen in love with dogs"
app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susie"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this?!?!", author: "Buzzfeed"}
	];
	res.render("posts", {posts: posts});
});

app.listen(3000, function(){
	console.log("Server is listening!");
});