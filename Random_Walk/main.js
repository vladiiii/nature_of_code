
var x = 900 / 2;
var y = 600 / 2;

function setup() {
  createCanvas(900, 600);
  w = new Walker();
  background(153,111,214);
}

function draw() {
  w.display();
  w.walk();
}

function mousePressed(){
  background(153,111,214);
}

function Walker(){
  this.x = width/2;
  this.y = height/2;

  this.walk = function(){
    this.x += random(-1,1);
    this.y += random(-1,1);
  }

  this.display = function(){
    fill(0);
    rect(this.x, this.y, 2, 2);
  }
}
