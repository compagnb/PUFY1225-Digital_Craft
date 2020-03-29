var fish;

function preload() {
  fish = loadModel('https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/fish.obj');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(200);
  scale(50);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(fish);
}