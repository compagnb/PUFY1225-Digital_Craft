

function setup() { // this function only runs 1x
  // createCanvas(width, height); 
  createCanvas(300, 300); // using the createCanvas function allows us to determine the size of the canvas we want to use. 
}

function draw() { // this runs forever!
  // backround(color),
  // colors can be displayed in Hexcode, keyword, and RGB values
  // single values represent grayscale
  // you can also utilize an alpha channel with an additional value (2nd to represent the alpha in grayscale, 4th to represent the alpha in color)
  background(220);

  // filling a shape with color
  // fill(color);
  fill('red');
  // Remember... computers are stupid, so we need to change it back after we are done changing the color or else everything will be shaded the same color. 

  // change outline
  // strokeWeight(pixels);
  noStroke();
  // Remember... computers are stupid, so we need to change it back after we are done changing the stroke or else everything will have the same stroke. 

  // drawing circles
  // ellipse(x position, y position, width, height);
  ellipse(150, 150, 100, 100);

  // filling a shape with color
  // fill(color);
  fill(200, 0, 200);
  // Remember... computers are stupid, so we need to change it back after we are done changing the color or else everything will be shaded the same color. 

  // change outline
  // strokeWeight(pixels);
  strokeWeight(2);
  // Remember... computers are stupid, so we need to change it back after we are done changing the stroke or else everything will have the same stroke. 

  // drawing rectangles
  // rect(x position, y position, width, height);
  rect(150, 150, 20, 20);

  // drawing rectangles from the center rather from the corner
  // rectMode(CENTER/CORNER);
  rectMode(CENTER);
  fill("yellow");
  rect(150, 150, 20, 20);

  rectMode(CORNER);
  // Remember... computers are stupid, so we need to change it back after we are done or it will effect everything we do!

  // drawing triangles
  fill("blue");
  // triangle(point a x, point a y, point b x, point b y, point c x, point c y);
  triangle(300, 100, 320, 100, 310, 80);

  // drawing quads
  fill("orange");
  // quad(point a x, point a y, point b x, point b y, point c x, point c y, point d x, point d y);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  // drawing lines
  strokeWeight(3);
  stroke("blue");
  // line(beginning x, beginning y, end x, end y);
  line(10, 10, 50, 50);

  // drawing arcs
  strokeWeight(3);
  stroke("green");
  fill("black");
  // arc(x, y, width, height, start angle, stop angle);
  arc(100, 100, 80, 80, PI, TWO_PI);

}
