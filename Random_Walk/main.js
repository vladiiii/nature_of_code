
var x = 900 / 2;
var y = 600 / 2;

function setup() {
  createCanvas(900, 600);
  background(153,111,214);
}

function draw() {
  fill(0);
  rect(x, y, 2, 2);
  x += random(-1, 1);
  y += random(-1, 1);
}

function mousePressed(){
  background(153,111,214);
}
