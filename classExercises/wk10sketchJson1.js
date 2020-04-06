var film; 

function preload(){
	film = loadJSON("assets/films.json");
}

function draw(){
	var title = film.title;
	var director = film.director;
	var year = film.year;
	var rating = film.rating;
	print(title + " by " + director + " , " + year + ". Rating: " + rating);
}