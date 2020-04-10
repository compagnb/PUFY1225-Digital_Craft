var data;
var reading = 0;
var counter=0;
var deviceID = "460028000751373238323937";
var accessToken = "e0e7f53cd397b054f6a61cb6708abd4c9224a534";
var particleVariable = "analogvalue"

function setup() {
  createCanvas(500, 500);
  // call the api every 1000 milliseconds. 
  setTimeout(callAPI(), 1000);

}

function draw() {
background(255, 0, 0);
  fill(255);
  text(reading, 20, 20);
  ellipse(width / 2, height / 2, reading, reading);
}


function parseData(data) {
  reading = data.result;
  print("reading:" + reading);
    setTimeout(callAPI(), 1000);
}

function callAPI() {
  var url= "https://api.particle.io/v1/devices/"+ deviceID +"/"+ particleVariable + "?access_token=" + accessToken;
  print(url);
  //var url= 'https://api.particle.io/v1/devices/'+ deviceID + '/'+ particleVariable +'?access_token='+ accessToken;
  data = loadJSON(url, parseData);
  counter++;
  console.log(counter);
}