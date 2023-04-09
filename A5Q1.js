let bubble1;
let bubble2;
let bubble3;
let bubble4;
let bubble5;
function setup() {
  createCanvas(960, 540);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
  bubble3 = new Bubble(300, 100, 30);
  bubble4 = new Bubble(250, 150, 10);
  bubble5 = new Bubble(450, 300, 50);
}

function draw() {
  background("white");
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
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
