// Assignment 5, challenge 2: Hope Carroll
// Sketch that adds 50 bubbles that jitter randomly to a canvas of size 960 x 540
let bubbles = [];
function setup() {
  createCanvas(960, 540);
  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let x = random(width);
    let y = random(height);
    let r = random(10,60);
    bubbles[bubblesDrawn] = new Bubble(x, y, r);
  }
}

function draw() {
  background("white");
  for (let bubblesDrawn = 0; bubblesDrawn < bubbles.length; bubblesDrawn++) {
    bubbles[bubblesDrawn].move();
    bubbles[bubblesDrawn].show();
  }
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
  show() {
    push();
    stroke(255);
    strokeWeight(4);
    fill("lightblue");
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
}
