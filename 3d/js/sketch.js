var pup;
var scribble;

function preload(){
  pup = loadImage('../assets/pup.jpg');
  scribble = loadModel('../assets/tinker.obj', true);
  
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(0, 0);
  //box(x or width, y or height, z or depth);
  lx = mouseX - height/2;
  ly = mouseY - width/2;
  // pointLight(255, 0, 0, 1, 1 ,100);
  // pointLight(0, 0, 255, lx, ly, 25);
  noStroke();
  // specularMaterial(255, 0, 0);
  box(50, 50, 50);
  
  
  
//   noStroke();
//   fill('blue');
//   plane(150, 150);
  
//   //sphere(200, 200, 200);
//   torus(200, 50);
}