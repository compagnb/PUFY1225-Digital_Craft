var stats;

function preload(){
	stats = loadTable("assets/Jeter_BattingStats.csv");
}

function setup(){
	for(var i = 0; i < stats.getRowCount(); i++){
		// gets the value from row i, column 0 in the file
		var year = stats.get(i, 0);
		// gets the value from row i, column 1
		var homeRuns = stats.get(i, 1);
		var rbi = stats.get(i, 2);
		var avg = stats.get(i, 3);
		print (year, homeRuns, rbi, avg);
	}
}