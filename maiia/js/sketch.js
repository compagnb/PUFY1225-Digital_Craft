
function setup() {
  createCanvas(400, 400, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  stroke(00, 00, 255);
  rect (0, 0, 400, 400);
  strokeWeight(001); //I make it possible to cut out
  for(var i= 20; i < width; i+=40){
    for (var a= 20; a < height; a+=40){
      for (var p= 100; p < 250; p+=20) {
        noFill();
        ellipse(a, i, 20, 20); //multiplied fancy circles
        fill("#000000");
        rect(a, i, 20, 20); //fancy rectangled
        fill ("#ffffff");
        ellipse(200, 200, 390, 390);
        noFill(); //next parts are transparent
        ellipse(200, 200, p, p); 
        //i've replaced all mouseX with numbers to make my generative static
      }
    }
  }
  line(20+i, 0, 200, 200); //butterfly wings
  line(0, 200+i, 200, 200);  
  line(400+i, 400, 200, 200);  
  line(400,400+i, 200, 200);
  
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}

