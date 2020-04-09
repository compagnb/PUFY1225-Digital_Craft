var data;
var reading = 0;
var counter=0;
var w=0;
var easing = 0.05;


function setup() {
  createCanvas(500, 500);
  
 callAPI();

}



function draw() {

background(255, 0, 0);
  fill(255);

  text(reading, 20, 20);

  //draw circle with easing. 
  // var targetW = reading;
  // var dw = targetW - w;
  // w += dw * easing;
  ellipse(width / 2, height / 2, reading,reading);
  //console.log('w:+'+w);

}


function parseData(data) {

  reading = data.result;
  print("reading:" + reading);
  //call API every 1000 milliseconds
  setTimeout(callAPI(), 1000);

}

function callAPI() {
  var url = 'https://api.particle.io/v1/devices/3a0040000851353531343431/analogvalue?access_token=27280314aec35f59f2530e76ba2e999f3600dfd9';
  data = loadJSON(url, parseData);
  counter++;
//  console.log(counter);

}