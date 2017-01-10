var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("SOMETHING WENT WRONG!");
// 	} else {
// 		console.log("We just saved a cat to the DB:");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Nice"
}, function(err, cats){
	if(err){
		console.log(err);
	} else {
		console.log(cats);
	}
});

Cat.find({}, function(err, cats){
	if(err){
		console.log("OH NO, ERROR!");
		console.log(err);
	} else {
		console.log("All the cats...");
		console.log(cats);
	}
});