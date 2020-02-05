var odds;



function setup() {

  createCanvas(400, 400);

}



function draw() {

  background(220);

  

  // line(20, 40, 60, 80);

  // line(40, 40, 80, 80);

  // line(60, 40, 100, 80);

  // line(80, 40, 120, 80);

  // line(100, 40, 140, 80);

  // line(120, 40, 160, 80);

  // line(140, 40, 180, 80);

  // line(160, 40, 200, 80);

  

  for(var i= 7; i < width; i+=7){

    odds = i%10

    if (odds == 0){

      strokeWeight(2);

    }else{

      strokeWeight(1);

    }

    //line(beginning x, beginning y, ending x, ending y);

    line(i, 40, 40 + i, 80);

    line(40 + i, 80, i, 120);

    line(i, 120, 40+i, 160);

  }

  

  for(var j = 0; j <=10; j++){

    print(j);

  }



  

}






