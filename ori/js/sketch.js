
function setup() {
  createCanvas(600, 600, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  //circles but notfilled so it can make the lines
  for (var i=90; i<900; i+=12) {
    // closest to the middle, greater than is the ammount it goes to the edge, ten is the space between
    ellipse (width/2, height/2, i, i);
  }  
  ellipse (500, 300, 500, 500);
  ellipse (400, 300, 500, 500);
  ellipse (300, 200, 500, 500);
  ellipse (200, 200, 500, 500);
  ellipse (600, 600, 500, 500);
  
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}