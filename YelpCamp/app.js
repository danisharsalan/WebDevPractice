var express     = require("express"), 
	app         = express(), 
	bodyParser  = require("body-parser"),
	mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name: "Mineral Crave",
// 		image: "http://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/blog-copies/fulford_cave_campground_007.jpg?itok=pizE6U5K",
// 		description: "This is what that boi wants. He craaaaves dat mineral boi"
// 	}, function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("NEWLY CREATED CAMPGROUND");
// 			console.log(campground);
// 		}
// 	});

app.get("/", function(req, res){
	res.render("landing");
});

// INDEX Route - show all campgrounds
app.get("/campgrounds", function(req, res){
	// Get all campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
});

// CREATE Route - add new campground to DB
app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	// Create a new campground and save to DB
	Campground.create(newCampground, function(err, newCampground){
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	});
});

// NEW Route - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	// find the campground with provided id
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// render show template - show details about that campground
			res.render("show", {campground: foundCampground});
		}
	});
});

app.listen(3000, function(){
	console.log("YelpCamp server has started");
});