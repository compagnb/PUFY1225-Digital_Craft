var w=30;
var angle=0;
var offset=0;
var a=0;

function setup() {
  createCanvas(400, 400,WEBGL);
  // ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
}

function draw() {
  background(220);
  for(var z=-height/2;z<height;z+=w+20){
    for(var x=-width/2;x<width;x=x+w+20){
      d=dist(x,0,width/2,height/2);
      offset=map(d,0,width/2,PI/8,PI)
      a=angle+offset;
      push();
      translate(x,(map(sin(a),-1,1,-100,100)), z);
      sphere(w);
      pop();
    }
  }
  angle+=0.01;
  // fill(map(angle,-1, 1, 0, 255));
}