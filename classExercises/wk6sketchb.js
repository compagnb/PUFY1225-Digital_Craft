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
    rect(200, rectY[i], 50, 25);
    rectY[i] += 1;
  }
}
function mousePressed() {
  rectY.push(0);
}