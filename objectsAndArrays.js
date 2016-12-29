var movies = [
	{
		name: "Godfather",
		rating: 3,
		hasWatched: true
	},
	{
		name: "Citizen Kane",
		rating: 5,
		hasWatched: false
	},
	{
		name: "Silence of The Lambs",
		rating: 4.7,
		hasWatched: true
	},
	{
		name: "The Neighbors",
		rating: 1.2,
		hasWatched: true
	}
]

movies.forEach(function(movie){
	buildString(movie);
});

function buildString(movie) {
	if(movie.hasWatched){
		console.log("You have watched \"" + movie.name + "\" - " + movie.rating + " stars.");
	} else {
		console.log("You have not watched \"" + movie.name + "\" - " + movie.rating + " stars.");
	}
}