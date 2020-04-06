var stats;
var homeRuns;

function preload(){
	stats = loadTable("assets/Jeter_BattingStats.csv");
}

function setup(){
	createCanvas(400, 400);
	var rowCount = stats.getRowCount();
	homeRuns = [];
	for (var i = 0; i < rowCount; i++){
		homeRuns[i] = stats.getNum(i, 1);
	}
}

function draw(){
	background(200);
	stroke(153);
	line(20, 100, 20, 20);
	line(20, 100, 380, 100);
	for (var i = 0; i < homeRuns.length; i++){
		var x = map(i, 0, homeRuns.length-1, 20, 380);
		line(x, 20, x, 100);
	}

	noFill();
	stroke(0);
	beginShape();
	for (var i = 0; i < homeRuns.length; i++){
		var x = map(i, 0, homeRuns.length-1, 20, 380);
		var y = map(homeRuns[i], 0, 60, 100, 20);
		vertex(x, y);
	}
	endShape();

}