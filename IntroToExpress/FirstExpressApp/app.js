var express = require('express');
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/dog" => "WOOF!"
app.get("/dog", function(req, res){
	res.send("WOOF!");
});

app.get("/r/:subredditName", function(req, res){
	res.send(("welcome to the " + req.params.subredditName + " subreddit!").toUpperCase());
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	console.log(req.params);
	res.send("welcome to the comments page!");
});

app.get("*", function(req, res){
	res.send("You are a star!");
});

//Tell Express to listen for requests (start server)

app.listen(3000, function(){
	console.log("Server has started!");
});