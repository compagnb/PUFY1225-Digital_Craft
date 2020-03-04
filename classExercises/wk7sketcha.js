function setup() {
  // We need to include WEBGL to ensure that we create a canvas that is a WEB GL canvas.
  createCanvas(400, 400, WEBGL); 
  // This allows 3d to be rendered in our graphics pipeline. (Remember we don't want to clogg the juicer.)
}

function draw() {
  background(100);


  translate(-130, -100, 0);
  // 3d primitives do not have x, y coordinates listed as parameters, we must use translates to position the elements.
  
  // To see wire frames use no fill and just add a stroke. 
  stroke(255);
  noFill();
  
  push();
  // use rotate with the axis id to rotate on a given axis.
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // PLANES
  // plane( x size, y size);
  // or plane (x&y size if the same #);
  plane(40);
  pop();

  // moving the placement, because 3d primitives do not have x, y coordinates
  translate(130, 0, 0);
  
  // basic fill material with the wireframe can be achieved by using stroke and fill.
  stroke(255);
  fill("red");
  
  push();
  // use rotate with the axis id to rotate on a given axis.
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // CUBES!
  // box( x size, y size, z size);
  // or box (x,y & z size if the same #);
  box(40, 40, 40);
  pop();
  

  // moving the placement, because 3d primitives do not have x, y coordinates
  translate(130, 0, 0);
  
  // basic fill material without the wireframe can be achieved by using noStroke and fill.
  noStroke();
  fill("red");
  
  // use rotate with the axis id to rotate on a given axis.
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // Cylindars!!
  // cylinder( diameter, height);
  cylinder(40, 60);
  pop();

  // moving the placement, because 3d primitives do not have x, y coordinates
  translate(-130 * 2, 200, 0);
  // Normal material looks rainbow, but provides visual information on the axis, each color R - all facing x axis, G - all facing y axis, B - all facing z axis... this is really good for testing...
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // Cones!!
  // cone( diameter, height);
  cone(40, 60);
  pop();

  
  // moving the placement, because 3d primitives do not have x, y coordinates
  translate(130, 0, 0);
  
  // Ambient Materials needs a certain color light to be present in order to reflect their color. 
  ambientMaterial(0, 255, 0);
  // This ambient light has both red and green, the object will only reflect the green
  ambientLight(100, 150, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // Donuts!!
  // torus( diameter, tube thickness);
  torus(40, 10);
  pop();

  // moving the placement, because 3d primitives do not have x, y coordinates
  translate(130, 0, 0);
  // Specular material is a shiny reflective material. Like ambient material it also defines the color the object reflects under ambient lighting.
  specularMaterial(100, 100, 200);
  // Spotlights! A maximum of 5 pointLight can be active at one time
  // pointLight(color, x, y, z);
  pointLight(250, 250, 250, 100, 100, 30);
  
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // Spheres!
  // sphere( x size, y size, z size);
  // or sphere (x,y & z size if the same #);
  sphere(40);
  pop();

}
