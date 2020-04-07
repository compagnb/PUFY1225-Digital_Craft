var films = [];
var filmData;  

function preload(){
	filmData = loadJSON("assets/films.json");
}

function setup(){
	createCanvas(400, 400);
	for(var i = 0; i<filmData.length; i++){
		var o = filmData[i];
		films[i] = new Film(o);
	}
	noStroke();
}
function draw(){
	background(0); 
	for(var i = 0; i<films.length; i++){
		var x = 1 *32 +32;
		films[i].display(x, 105);
	}
}

function Film(f){
	this.title = f.title;
	this.director = f.director;
	this.year = f.year;
	this.rating = f.rating;

	this.display = function(x,y){
		var ratingGray = map(this.rating, 6.5, 8.1, 102, 255);
		push();
		translate(x, y);
		rotate(-QUARTER_PI);
		full(ratingGray);
		text(this.title, 0, 0);
		pop();
	};
}