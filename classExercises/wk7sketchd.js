var numOfImages = 17; // number of images present in the images folder
var imgs = []; // array of images to be filled
var font; // cbm font


function preload() {
  // load all images
  for (var i = 0; i < numOfImages; i++) {
    imgs[i] = loadImage("https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/" + i + "_image.png");
  }
  // load font
  font = loadFont("https://compagnb.github.io/PUFY1225-Digital_Craft/classExercises/assets/CBM.ttf");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(166);
  
}

