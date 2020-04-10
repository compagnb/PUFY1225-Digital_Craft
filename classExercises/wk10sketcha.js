var data;
var reading = 0;
var deviceID = "260037000447333439313830";
var accessToken = "27280314aec35f59f2530e76ba2e999f3600dfd9";
var particleVariable = "analogvalue"

function setup() {
  createCanvas(500,500);
  var url= "https://api.particle.io/v1/devices/"+ deviceID +"/"+ particleVariable + "?access_token=" + accessToken;
  print(url);
  //data from the particle is formated in json, just load the above url in a browser window and you will see!
  // parseData is a "call back function", when the url has finished loading, then run the parse data function!
  data = loadJSON(url, parseData);

}


function draw() {


}


function parseData(data){
  background(255,0,0);
  reading = data.result;
  print("reading:"+reading);

}