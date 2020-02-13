// Global Variables can be used in any functions
var counter = 0;
var font = 'comic Sans MS';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 
  // here we are calling our funtion
  // random will pick a random number between the low limit and the high limit.
  typo(font, random(100,300), 'HI!!!', mouseX, mouseY);
 
  // how to change a font
  textFont("arial");
  // how to set type size
  textSize(20);
  // we can also adjust the line space between the code
  textLeading((mouseX/width)*64);
  // we can also set text to be set within certain boundaries by using start x, y and end x, y
  text("computers are stupid... but they are good with math!", 100, 100, 200, 200);
 
}

// here is a custome function... with parameters for font, size, message, startX, startY
// Parameters are placeholders for variables
function typo(font, size, message, startX, startY){
  fill(200, 0, 200);
  // here we set the font as whatever font is passed through the function as a parameter
  textFont(font);
  // here we set the size as whatever font is passed through the function as a parameter
  textSize(size);
  // use the alingn fuction to adjust where the text is drawn
  textAlign(RIGHT);
  // here we set the font as whatever message, and starting coordinates are passed through the function as a parameter
  text(message, startX, startY);
}

// when the mouse clicks run this code. 
function mouseClicked(){
  // if counter is = to 0... 
  // the === tests for type of variable (number, string, float, etc.) as well as if the variable matches
  if(counter === 0){
    // change the font
    font = "helvetica";
    // add 1 to the counter
    // the second time the mouse is clicked the counter will = 1
    counter++;
  } else if (counter === 1) {
    font = 'Roboto';
    counter++;
  } else if (counter === 3) {
    font = 'news';
  } else{
    font = 'comic Sans MS'
    counter = 0;
  }
 
}
