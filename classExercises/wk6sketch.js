var rectY_0 = 0;
var rectY_1 = 15;
var rectY_2 = 30;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  rect(100, rectY_0, 50, 25);
  rect(200, rectY_1, 50, 25);
  rect(300, rectY_2, 50, 25);
  rectY_0 += 1;
  rectY_1 += 1;
  rectY_2 += 1;
}