function setup () {
  createCanvas(600, 600, SVG);
  //size of the canvas
}

function draw() {
  background("yellow");
  noFill();
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

  strokeWeight (4)
  }