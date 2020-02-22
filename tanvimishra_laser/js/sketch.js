
function setup() {
  createCanvas(400, 400, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  var count = 0;
  var dist = 35;
  
  for( var j=0; j<height+200; j+=dist){
    for(var i =0; i<width+100; i+=dist){
      ellipse(i,j,mouseX+dist,mouseY);
      noFill()
      strokeWeight(1);
      count++;
      if (count%6==0){
        strokeWeight(2.5);
      }
    }
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}