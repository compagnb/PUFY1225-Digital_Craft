var xPos = 0;
var fr = 30; //starting FPS
var clr;

function setup() {
  createCanvas(400, 400);
  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(255, 0, 0);
}

function draw() {
  background(200);
  xPos = xPos += 1; // Move Rectangle

  if (xPos >= width) {
   // If you go off screen.
    if (fr === 30) {
      clr = color(0, 0, 255);
      fr = 10;
      frameRate(fr); // make frameRate 10 FPS
    } else {
      clr = color(255, 0, 0);
      fr = 30;
      frameRate(fr); // make frameRate 30 FPS
    }
    xPos = 0;
  }
  fill(clr);
  rect(xPos, 40, 60, 60);
}