var weather;
var api='https://api.openweathermap.org/data/2.5/forecast/daily?q=';
var input;
var apiKey='&appid=4d0f39d1147f1e8c8515efffc154653d';
var units='&cnt=16&units=metric';
var canvas;
var minY=[];
var maxY=[];
var evenY=[];
var drop=[];

function setup() {
  canvas=createCanvas(360, 600);
  canvas.position(20,30);
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  input = select('#city');
}

function weatherAsk() {
 
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
  console.log(url);
}

function gotData(data) {
  
  weather = data;
  for(var i=0;i<weather.list.length;i++){
  var mintemp=weather.list[i].temp.min;
  var maxtemp=weather.list[i].temp.max;
  var eventemp=weather.list[i].temp.eve;
  minY[i]=map(mintemp,-5,40,height*0.8,0);
  maxY[i]=map(maxtemp,-5,40,height*0.8,0);
  evenY[i]=map(eventemp,-5,40,height*0.8,0);
  }
  
  for (var j = 0; j < 100; j++) {
    drop[j] = new Drop();
  }
}

function draw() {
  clear();

  if (weather) {
    var todaytemp = weather.list[0].temp.eve;
    var todayhumidity = weather.list[0].humidity;
    var tomorrowhumidity = weather.list[1].humidity;
    noStroke();
    fill(200,0,255,140);
    ellipse(100, 230,todayhumidity, todayhumidity);
    fill(100,0,255,190);
    ellipse(250, 230,tomorrowhumidity,tomorrowhumidity);
    stroke(255);
    line(0,evenY[0]+250,width,evenY[0]+250);
    fill(255);
    noStroke();
    textSize(42);
    text(weather.city.name,0, 80);
    textSize(14);
    text("Forecast: 16 Days/Daily ",0, 320);
    fill(255);
    text("Today:"+floor(todaytemp)+"\u2103",0, minY[0]+310);
    text("Humidity: today VS tomorrow",0, 180);
    
    for(var i=0;i<weather.list.length;i++){
    fill(255,150);
      noStroke();
    textSize(12);
    text(floor(weather.list[i].temp.eve), width*i/16,evenY[i]+260);   
    stroke(255, 102, 0,30);
      fill(255, 102, 0);
      ellipse(width*i/16+5,evenY[i]+280,5,5);       
    fill(255, 102, 0,10);
    beginShape();
      vertex(0,evenY[0]+250);
      curveVertex(5,evenY[0]+250);
      curveVertex(width*1/16+5,evenY[1]+280);
      curveVertex(width*2/16+5,evenY[2]+280);
      curveVertex(width*3/16+5,evenY[3]+280);
      curveVertex(width*4/16+5,evenY[4]+280);
      curveVertex(width*5/16+5,evenY[5]+280);
      curveVertex(width*6/16+5,evenY[6]+280);
      curveVertex(width*7/16+5,evenY[7]+280);
      curveVertex(width*8/16+5,evenY[8]+280);
      curveVertex(width*9/16+5,evenY[9]+280);
      curveVertex(width*10/16+5,evenY[10]+280);
      curveVertex(width*11/16+5,evenY[11]+280);
      curveVertex(width*12/16+5,evenY[12]+280);
      curveVertex(width*13/16+5,evenY[13]+280);
      curveVertex(width*14/16+5,evenY[14]+280);
      curveVertex(width*15/16+5,evenY[15]+280);
      curveVertex(width,evenY[0]+250);
      vertex(width,evenY[0]+250);
      endShape();
      
     // var checkrain=weather.list[0].weather.main;
     //  var Rain="Rain";
      // console.log(weather.list[i].weather[0].main);
       if (weather.list[i].weather[0].main=="Rain"){
        for (var j = drop.length - 1; j >= 0; j--) {
         drop[j].show();
         drop[j].fall();         
        }//end for loop j
         fill(255,15);
         noStroke();
         textSize(14);
         text("It will rain in the next 16 days.", 0,100); 
         //text("There will be rain in the next"+i+"16 days.", 0,100); 
     }//end if checkrain
    }  
}
}

function Drop() {
  this.x = random(0, width);
  this.y = random(-1000, 0);
  this.show = function() {
    stroke(255,15);
    line(this.x, this.y, this.x, this.y+10);
     if(this.y>height){
      this.y=0;
    }
  }; 
  this.fall = function() {
    this.y = this.y + 1;
  };
}