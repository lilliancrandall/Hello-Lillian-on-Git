
var img;



function setup() {
createCanvas(windowWidth,windowHeight);
img = loadImage("ManyMe.jpg");
// background(127,255,212);

}



function draw(){

   fill(127,255,212);
  rect(0,0,400,400);

  fill(255);
  textFont('Futura');
  textSize(32);
text('LILLIAN CRANDALL', 400, 500);
img(img,30,0);

}
