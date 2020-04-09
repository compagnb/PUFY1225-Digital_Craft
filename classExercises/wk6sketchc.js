var rectX = []; // start with empty list
var rectY = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect(rectX[i], rectY[i], 50, 25);
    rectY[i] += 1;
  }
}
function mousePressed() {
  rectX.push(mouseX);
  rectY.push(mouseY);
}