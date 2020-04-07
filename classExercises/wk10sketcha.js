var data;
var reading =0;
var currentM;

function setup() {
  createCanvas(500,500);
  var url = 'https://api.particle.io/v1/devices/460028000751373238323937/analogvalue?access_token=964d18b0d0878157b19fb12080dadbc78eb530f2';
  data = loadJSON(url, parseData);
  currentM=millis();
}


function draw() {


}


function parseData(data){
  background(255,0,0);
  reading = data.result;
  print("reading:"+reading);

}