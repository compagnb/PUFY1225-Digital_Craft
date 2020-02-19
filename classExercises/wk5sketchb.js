// use decimals for the angle in degrees!!
var angle = 0.45;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
  //Draw the rectangle from the center and it will also be the
  //rotate around that center
  rectMode(CENTER);
}

function draw() {
  background(51);

  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation
  rotate(angle);

  rect(0, 0, 180, 180);
}
