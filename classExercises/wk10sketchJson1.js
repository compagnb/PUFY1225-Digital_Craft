var films;
var filmsData = []; 

function preload(){
	filmsData = loadJSON("assets/film.json");
}

function setup(){
	for (let i = 0; i < filmData.length; i++) {
    	// Get each object in the array
    	var film = filmsData[i];
    	// Get a position object
		var title = film.title;
		var director = film.director;
		var year = film.year;
		var rating = film.rating;
		print(title + " by " + director + " , " + year + ". Rating: " + rating);
  	}
}

function draw(){

}