var rectY = [0, 15, 30];
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect((i+1)*100, rectY[i], 50, 25);
    rectY[i] += 1;
  }
}