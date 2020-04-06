var films; 

function preload(){
	films = loadJSON("assets/films.json");
}

function draw(){
	var title = films.title;
	var director = films.director;
	var year = films.year;
	var rating = films.rating;
	print(title + " by " + director + " , " + year + ". Rating: " + rating);
}