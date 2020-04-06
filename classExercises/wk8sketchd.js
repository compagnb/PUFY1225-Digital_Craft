
var num = 60;
var mx = [];
var my = [];

function setup() {
  createCanvas(200, 200, WEBGL);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(240);
  
  var which = frameCount % num;
  mx[which] = mouseX-width/2;
  my[which] = mouseY- height/2;
  
  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    var index = (which + 1 + i) % num;
    noStroke();
    fill(50, i, 0);
    push();
    translate(mx[index], my[index] );
    rotateY(1.25);
    rotateX(-0.9);
    box(i);
    pop();
  }
}
