xRad = 15;
yRad = 15;

function setup() {
    createCanvas(600, 400, SVG); // Create SVG Canvas
    strokeWeight(2);
    stroke('#ED225D');
}

function draw() {

	for(var x=0; x < width; x+=xRad){
    	for(var y=0; y < height; y+=yRad){
    		line(x, y, 200, 200);
    	}
	}
	print(frameCount);
  	// if (frameCount > 100) {
        noLoop();
        save();
    // }
}
