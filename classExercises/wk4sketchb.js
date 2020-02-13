function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  // here is a nested for loop... 
  for(var x = 0; x <= width; x+=10){
    for(var y = 0; y <= height; y+=10){

      // to call a custome function, use the function name and then pass the variables required
      drawPikachu(x,y, 10, 10, 200, 0, 200, x); 
    }
  }
 
  // color("rColor, gColor, bColor");
}

// functions are reusable pieces of code we can customize. We can pass parameters or variables to use within the function's code.  
function drawPikachu(x, y, pikaWidth, pikaHeight, rColor, gColor, bColor, alpha){
  
  // push allows us to set a translate/rotate/etc. 
  // remember you can't have a push without a pop!
  push();

  // // translate lets us reset 0, 0  as different coordinates 
  //translate(x, y);

  // // this is the rotate translation
  //rotate(angle);

  noStroke();

  // here we are passing parameters to set the color
  fill(rColor, gColor, bColor, alpha);

  // to draw a shape with vectors use beginShape
  beginShape();
    // then create points
    vertex(x, y);
    vertex(x+pikaWidth, y);
    vertex(x+pikaHeight, y + pikaHeight);
    vertex(x, y + pikaHeight);
  // when finished close it with endShape
  endShape();
 
  // // this is Maiia's Pikachu Code
  // rect (130, 200, 190, 200);
  // triangle(130, 199, 200, 400, 100, 305);
  // triangle(170, 306, 130, 400, 100, 306);
  // triangle(400, 400, 300, 400, 320, 200);
  // triangle(300, 200, 400, 50, 320, 300);
  // triangle(130, 200, 100, 50, 250, 300);
  // fill("#d55318");
  // strokeWeight(2);
  // stroke("#8e3102");
  // ellipse (140, 300, 50, 50);
  // ellipse (300, 300, 50, 50);
  // fill("#ed7f5c");
  // rect (200, 300, 40, 45);
  // fill("#601b03");
  // ellipse (170, 250, 35, 35);
  // ellipse (270, 250, 35, 35);
  // rect (215, 270, 10, 4);
  // triangle(365, 101, 400, 50, 384, 100);
  // triangle(110, 101, 100, 50, 130, 100);

  // pop will pop us out of the translation and reset us to the normal 0, 0
  pop();
}