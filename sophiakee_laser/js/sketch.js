

function setup() {
    // Create SVG Canvas
    createCanvas(windowWidth, windowHeight, SVG);
    frameRate(1)
    strokeWeight(2);
    stroke('#ED225D');
}

function draw() {

	line(mouseX, mouseY, pmouseX, pmouseY);
    print(pmouseX + ' -> ' + mouseX);
	print(frameCount);
  	if (frameCount > 10) {
        noLoop();
        save();
    }
}


