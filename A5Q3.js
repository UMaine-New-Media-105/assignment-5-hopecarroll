let bubbles = [];
let breeders = [];
let catchers = [];
function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  addX = -3;
  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 60);
    bubbles[bubblesDrawn] = new Bubble(x, y, r);
  }
  for (let breedersDefined = 0; breedersDefined < 25; breedersDefined++) {
    let x = random(width);
    let y = random(height);
    breeders[breedersDefined] = new Person(x, y);
  }
  for (let catchersDefined = 0; catchersDefined < 2; catchersDefined++) {
    let x = random(width);
    let y = random(height);
    catchers[catchersDefined] = new Alien(x, y);
  }
}

function draw() {
  background("white");
  for (let bubblesDrawn = 0; bubblesDrawn < bubbles.length; bubblesDrawn++) {
    bubbles[bubblesDrawn].move();
    bubbles[bubblesDrawn].show();
  }
  for (
    let breedersDefined = 0;
    breedersDefined < breeders.length;
    breedersDefined++
  ) {
    breeders[breedersDefined].move();
    breeders[breedersDefined].show();
  }
  for (
    let catchersDefined = 0;
    catchersDefined < catchers.length;
    catchersDefined++
  ) {
    catchers[catchersDefined].move();
    catchers[catchersDefined].show();
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
    translate(this.x, this.y);
    scale(this.size);
    fill("yellow");
    noStroke();
    rotate(180);
    //first point
    triangle(0, 50, 20, 0, -20, 0);
    //second point
    rotate(72);
    triangle(0, 50, 20, 0, -20, 0);
    //third point
    rotate(72);
    triangle(0, 50, 20, 0, -20, 0);
    //fourth point
    rotate(72);
    triangle(0, 50, 20, 0, -20, 0);
    //fifth point
    rotate(72);
    triangle(0, 50, 20, 0, -20, 0);
    pop();
  }
}
class Alien {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.y = random(height);
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    translate(0, -300);
    //alienhead
    fill("yellowgreen");
    ellipse(50, 350, 50, 50);
    //alienears
    stroke("yellowgreen");
    strokeWeight(10);
    line(40, 325, 30, 315);
    ellipse(30, 315, 5);
    line(60, 325, 70, 315);
    ellipse(70, 315, 5);
    noStroke();
    //alieneyes
    fill("black");
    ellipse(35, 350, 20, 10);
    ellipse(65, 350, 20, 10);
    fill("black");
    //alienmouth
    arc(50, 360, 30, 10, 360, 180);
    //alienbody
    fill("yellowgreen");
    rect(42, 375, 15, 25);
    stroke("yellowgreen");
    strokeWeight(5);
    line(45, 390, 15, 355);
    line(55, 390, 85, 350);
    stroke("yellowgreen");
    strokeWeight(10);
    line(40, 325, 30, 315);
    ellipse(30, 315, 5);
    line(60, 325, 70, 315);
    ellipse(70, 315, 5);
    noStroke();
    pop();
  }
}
class Person {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.addX = -addX;
  }
  move() {
    this.x = this.x + this.addX;
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.y = random(height);
    }
  }
  show() {
    push();
    translate(this.x, this.y);
    translate(30, 100);
    stroke(10);
    // draw the head
    fill("black");
    ellipse(0, -20, 15, 15);
    // draw the body
    line(0, -15, 0, 20);
    // draw the arms
    line(-10, 10, 0, -5);
    line(10, 10, 0, -5);
    // draw the legs
    line(-5, 30, 0, 20);
    line(5, 30, 0, 20);
    pop();
  }
}
