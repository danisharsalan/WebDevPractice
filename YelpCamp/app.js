var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Tuna Tube", image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
		{name: "Mineral Crave", image: "http://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/blog-copies/fulford_cave_campground_007.jpg?itok=pizE6U5K"},
		{name: "Lion\'s den", image: "http://discoverlewiscounty.com/sites/default/files/styles/image_750x420/public/EastCreekCampground_1.JPG?itok=EwPCcZDR"},
		{name: "Tuna Tube", image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
		{name: "Mineral Crave", image: "http://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/blog-copies/fulford_cave_campground_007.jpg?itok=pizE6U5K"},
		{name: "Lion\'s den", image: "http://discoverlewiscounty.com/sites/default/files/styles/image_750x420/public/EastCreekCampground_1.JPG?itok=EwPCcZDR"},
		{name: "Tuna Tube", image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx"},
		{name: "Mineral Crave", image: "http://www.outdoorproject.com/sites/default/files/styles/cboxshow/public/blog-copies/fulford_cave_campground_007.jpg?itok=pizE6U5K"},
		{name: "Lion\'s den", image: "http://discoverlewiscounty.com/sites/default/files/styles/image_750x420/public/EastCreekCampground_1.JPG?itok=EwPCcZDR"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3000, function(){
	console.log("YelpCamp server has started");
});