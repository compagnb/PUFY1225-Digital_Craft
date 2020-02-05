// These are variables, they act as a place holder. They can only be used in the function they are declared in... when we declare them up here, they are GLOBAL and can be used anywhere!

var xPos;
var yPos;

function setup() { // this function only runs 1x
  // createCanvas(width, height); 
  createCanvas(300, 300); // using the createCanvas function allows us to determine the size of the canvas we want to use. 

  // we can set an initial value for our variables in this function and change it in the draw to make things move!
  xPos = 0;
  yPos = 0; 

  // remember when we draw with P5, 0 x and 0 y is the top left of the screen... not the center!
}

function draw() { // this runs forever!
  // if we do use a background, we can make things look like they are moving!
  background(220);

  // here we can draw an ellipse at the coordinates of the xPos and yPos Variables. 
  ellipse(xPos, yPos, 50, 50);

  // since this loop ever stops, if we add 5 to each variable, each time it loops the position will change to the new values... in this case it will move down on a diagnal down the screen.
  xPos = xPos + 10;
  yPos = yPos + 10;

  // we can use a logic statement to reset a variable if it has gone past the point we want it to. 
  if (yPos >= 200){
    yPos = 0;
  }


}
