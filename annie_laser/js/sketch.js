xRad = 15;
yRad = 90;

function setup() {
  createCanvas(400, 400, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  // stroke(255, 0, 0); // red is good for laser
  // noFill(); // better not to have a fill for laser
}

function draw() {
  background("white");
  fill('Red');
  textSize(45);
  textFont('Helvetica');
  text('CODE', 130, 395);

for(var x= xRad/2; x< width; x+=xRad){
    for(var y= yRad/2; y < height; y+=yRad){
      fill("red");
      stroke(0, 0, 0);
      ellipse(x, y, xRad, yRad);
      strokeWeight(5);
      line(200,200,x,y)
      
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}