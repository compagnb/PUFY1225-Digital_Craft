function setup() { 
  createCanvas(600, 600);
} 

function draw() { 
  background(220);
  for(var x = 110; x <= width-(110/2); x+=70){
    for(var y = 110; y <= height; y+=110){
      owl(x, y);
    }
  }
}

// Owl Function
function owl(x, y) {
  push();
  translate(x, y);
  stroke(88, 3, 1);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35); // Left eye 
  ellipse(17.5, -65, 35, 35); // Right eye dome
  arc(0, -65, 70, 70, 0, PI); // Chin
  
  fill(0);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8); // Right eye
  
  fill(254, 193, 6); 
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
  
}