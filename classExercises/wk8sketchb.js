class Bowtruckle{
  constructor(){

  }
  createShape(x, y, z, r, w, h, shape, color){
    push();
    fill(color);
    translate(x, y, z);
    rotateZ(r);
    shape(w,h);  
    pop();
  }
  
  buildBowtruckle(){
    // eye1
    this.createShape(17, -250, 0, 0, 5, 5, sphere, "black");
    // eye2
    this.createShape(37, -250, 0, 0, 5, 5, sphere, "black");
    //mouth
    this.createShape(27, -235, 0, 0, 11, 2, cylinder, "black");
    
  }
  

}

function setup() {
  createCanvas(400, 400, WEBGL);
  var picket = new Bowtruckle();
  picket.buildBowtruckle();
}

function draw() {
  //background(220);
}

