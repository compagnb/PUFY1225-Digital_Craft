// img: https://images-na.ssl-images-amazon.com/images/I/61Oh2US5ZuL._SX425_.jpg
// earth: https://live.staticflickr.com/2521/3884071286_edb50f8137_b.jpg

// Global Variables!
var img;
var earthMap;
var cam;
var theta = 0;

// use preload to load assets!
function preload(){
  img = loadImage("https://images-na.ssl-images-amazon.com/images/I/61Oh2US5ZuL._SX425_.jpg");
  earthMap= loadImage('assets/earth.jpg', true); 
}

function setup() {
  createCanvas(400, 400, WEBGL);  

  // create a capture of video, mute the sound, and hide the video displayed in the HTML Doc. 
  cam = createCapture(VIDEO);
  cam.elt.muted = true;
  cam.hide();

}

function draw() {
  background(250);
  noStroke();
  translate(-120, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  // pass the earth image as texture
  // this texture has been set up to fit on a sphere
  texture(earthMap);
  sphere(60);
  pop();
  
  translate(120, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  // pass the pup image as texture
  texture(img);
  box(50, 50, 50);
  pop();

  
  translate(120, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  // pass the capture as texture
  texture(cam);
  plane(100, 100);
  pop();
  
  theta += 0.05;
  
}
