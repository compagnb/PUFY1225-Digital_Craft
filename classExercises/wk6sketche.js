var rectXY = []; // start with empty list
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectXY.length; i++) {
    fill(rectXY[i][2]);
    rect(rectXY[i][0], rectXY[i][1], 50, 25);
    rectXY[i][1] += 1;
  }
}
function mousePressed() {
  rectXY.push([mouseX, mouseY, random(255)]);
}