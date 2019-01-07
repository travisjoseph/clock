var w = 800;
var h = 800;

function preload(){
  myFont = loadFont("https://fonts.googleapis.com/css?family=Staatliches");
}



function setup() {
  createCanvas(w, h);
}

function draw() {
  var sec = second();
  var ms = new Date();
  ms = ms.getMilliseconds();
  var min = minute();
  var hr = hour();
  background(0);
  translate(w/2, h/2);
 
  angleMode(DEGREES);

  textFont('Trebuchet MS');
  textSize(32);
  textAlign(CENTER, CENTER);
  strokeWeight(0);
  fill(255);

  if (min<10 && sec <10) {
    text(hr + ":0" + min + ":0" +sec, 0, 0);
  }
  else if (min<10 && sec >= 10) {
    text(hr + ":0" + min + ":" +sec, 0, 0);
  }
  else if (min>=10 && sec < 10) {
    text(hr + ":" + min + ":0" +sec, 0, 0);
  } else {
    text(hr + ":" + min + ":" +sec, 0, 0);
  }

  
  rotate(-90);
  noFill();
  strokeWeight(20);
  stroke(181, 66, 99);
  var secEndAngle = map(sec, 0, 60, 0, 360) + map(ms, 0, 0.999, 0, 6*0.001);
  arc(0, 0, 400, 400, 0, secEndAngle);

  stroke(130, 218, 125);
  var minEndAngle = map(min, 0, 60, 0, 360) + map(secEndAngle, 0, 360, 0, 6);
  arc(0, 0, 350, 350, 0, minEndAngle);

  stroke(252, 202, 128);
  var hrEndangle = map(hr%12, 0, 12, 0, 360) + map(minEndAngle, 0, 360, 0, 30);
  arc(0, 0, 300, 300, 0, hrEndangle);
}