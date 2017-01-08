var express = require("express");
var app = express();

// "/" should print "Hi there, welcome to my main page!"
app.get("/", function(req, res){
	res.send("Hi there, welcome to my main page!");
});

// "/speak/pig" should print "The pig says 'Oink'";
// "/speak/cow" should print "The cow says 'Moo'";
// "/speak/dog" should print "The dog says 'Woof Woof!'";
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		bird: "Chirp",
		cat: "Meow"
	}
	var animal = req.params.animal.toLowerCase;
	if(sounds[animal]){
		var sound = sounds[animal];
		res.send("The " + animal + " says \'" + sound + "\'");
	} else {
		res.send("I don\'t know what the " + animal + " says.");
	}
});


// "/repeat/hello/3" should print "hello hello hello"
// "/repeat/hello/5" should print "hello hello hello hello hello"
// "/repeat/blah/2" should print "blah blah"
app.get("/repeat/:phrase/:times", function(req, res){
	var repetitions = parseInt(req.params.times);
	var str = "";
	for (var i = 1; i < repetitions; i++) {
		str += req.params.phrase + " ";
	}
	str += req.params.phrase;
	res.send(str);
});

// If a user visits any other route, print:
// "Sorry, page not found... What are you doing with your life?"
app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(3000, function(){
	console.log("Server has started!");
});