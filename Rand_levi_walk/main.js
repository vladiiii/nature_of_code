
var pos;
var step;
var prev;
var stepProb;

function setup(){
  createCanvas(1200,600);
  background(0);
  pos = createVector(width / 2, height / 2);
  prev = pos.copy();

}

function draw(){
  stroke(255);
  strokeWeight(2);
  line(pos.x, pos.y, prev.x, prev.y);

  prev.set(pos);

  step = p5.Vector.random2D();

  stepProb = random(100);
  if(stepProb < 1){
  step.mult(random(25, 100));
  }
  else{
    step.setMag(2);
  }
  pos.add(step);
}
