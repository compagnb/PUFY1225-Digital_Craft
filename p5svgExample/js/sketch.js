
function setup() {
  createCanvas(200, 200, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      rect(x * 10, y * 10, x, y);
      ellipse(x * 20, y * 20, x, y);
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}