class Bubble{
  constructor(x, y){
    this.xPos = x;
    this.yPos = y;
    
  }
  
  move(){
    this.xPos += random(0, 10);
    this.yPos += random(0, 10);
  }
  
  show(){
    fill(50);
    ellipse(this.xPos, this.yPos, 10, 10);
  }
  
  
  
}


var b1 = new Bubble();
var bubbles = [];
var maxBubbles = 50;

function setup() {
  createCanvas(400, 400);
  for(var i = 0; i < maxBubbles; i++){
    bubbles[i]= new Bubble(random(0, width), random(0, height));
  }
  
}

function draw() {
  background(220);
  for(var j = 0; j < maxBubbles; j++){
    bubbles[j].show();
    bubbles[j].move();
    print( " xpos: " + bubbles[49].xPos)
  }
  
  // b1.move();
  // b1.show();
  
}

