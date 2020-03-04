var deg = 180;
var changeDirection;
var collision;

function setup() {
  createCanvas(400, 400, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}
function draw() {
  //background(220);
  translate(200,400);       
  rotate (radians (deg));
  stroke("black");
  line (-200,0,0,0);
  strokeWeight(3);
  stroke("white");
  fill("black");
  strokeWeight(1);
  ellipse(-234,0,70,70);
  deg-=1;
  for(var f=0; f<=100; f+=3){
       fill("black");
       rect(i-400,3*f,f,f);
  }
  for(var i=0; i<=100; i+=3){
       fill("black");
       rect(i-300,3*i,i,i);
  }
  if (frameCount > 40) {
      noLoop();
      save();
  }
}


