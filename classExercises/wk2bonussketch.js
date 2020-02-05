

function setup() { // this function only runs 1x
  // createCanvas(width, height); 
  createCanvas(300, 300); // using the createCanvas function allows us to determine the size of the canvas we want to use. 
}

function draw() { // this runs forever!
  // if we dont use a background, we will get a trail!
  // background(220);

  //mouseX and mouseY are library values that represent where the mouse is. 
  ellipse(mouseX, mouseY,10,10);
}
