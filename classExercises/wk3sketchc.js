var posX = 0;

var posY = 0;

var collision;



function setup() {

  createCanvas(400, 400);

  posX = 100;

  posY = 100;

}



function draw() {

  background(220);

  ellipse(posX, posY, 20, 20);

  

  //posY+=1;

  

  if (posX >= width){

    collision = 1;

      }else if (posX == 0){

        collision = 0;

      }

  

  print(collision);

  if (collision == 1){

    posX-=1;

  } else {

    posX+=1;

  }

  

    

  if (posY >= height){

    collision = 1;

      }else if (posY == 0){

        collision = 0;

      }

  

  print(collision);

  if (collision == 1){

    posY-=1;

  } else {

    posY+=1;

    //posY= posY+1;

  }



}