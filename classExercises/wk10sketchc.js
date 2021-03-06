var data;
var reading = 0;
var counter=0;
var w=0;
var easing = 0.05;
var deviceID = "460028000751373238323937";
var accessToken = "e0e7f53cd397b054f6a61cb6708abd4c9224a534";
var particleVariable = "analogvalue"

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
  var url= "https://api.particle.io/v1/devices/"+ deviceID +"/"+ particleVariable + "?access_token=" + accessToken;
  print(url);
  data = loadJSON(url, parseData);
  counter++;
  //  console.log(counter);
}