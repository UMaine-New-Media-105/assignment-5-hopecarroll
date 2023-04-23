let bubbles = [];
let breeders = [];
let catchers = [];
function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  spriteWidth = 80;
  spawnDelay = 90;
  framesDelayed = 0;
  addX = -3;
  startHealth = 900;
  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 60);
    bubbles[bubblesDrawn] = new Bubble(x, y, r);
  }
  for (let breedersDefined = 0; breedersDefined < 5; breedersDefined++) {
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
  framesDelayed++;
  for (let bubblesDrawn = 0; bubblesDrawn < bubbles.length; bubblesDrawn++) {
    bubbles[bubblesDrawn].move();
    bubbles[bubblesDrawn].show();
  }
  for (
    let breedersDefined = 0;
    breedersDefined < breeders.length;
    breedersDefined++
  ) {
    let thisBreeder = breeders[breedersDefined];
    thisBreeder.move();
    thisBreeder.show();
    if (framesDelayed > spawnDelay) {
      for (
        let matesChecked = 0;
        matesChecked < breeders.length;
        matesChecked++
      ) {
        let proposedMate = breeders[matesChecked];
        let isDifferentBreeder = breedersDefined !== matesChecked;
        let spriteDistance = dist(
          thisBreeder.x,
          thisBreeder.y,
          proposedMate.x,
          proposedMate.y
        );
        if (isDifferentBreeder && isTouching(thisBreeder, proposedMate)) {
          let x = random(width);
          let y = random(height);
          breeders.push(new Person(x, y));
          framesDelayed = 0;
          break;
        }
      }
    }
  }
  for (
    let catchersDefined = 0;
    catchersDefined < catchers.length;
    catchersDefined++
  ) {
    let thisCatcher = catchers[catchersDefined];
    thisCatcher.move();
    thisCatcher.show();
    // removes the catcher if it starves
    if (thisCatcher. health < 0) {
      catchers.splice(catchersDefined,1);
    }
    // removes breeder if catcher collides with it
    for (let breedersLeft = 0; breedersLeft < breeders.length; breedersLeft++) {
      let proposedCatch = breeders[breedersLeft];
      if (isTouching(thisCatcher, proposedCatch)) {
        breeders.splice(breedersLeft, 1);
        break;
      }
    }
  }
}
function isTouching(sprite1, sprite2) {
  let spriteDistance = dist(sprite1.x, sprite1.y, sprite2.x, sprite2.y);
  if (spriteDistance < spriteWidth) {
    return true;
  } else {
    return false;
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
    this.health = startHealth;
  }
  move() {
    this.x = this.x + this.addX;
    let isTooFarLeft = this.x < 0;
    let isTooFarRight = this.x > width;
    if (isTooFarLeft || isTooFarRight) {
      this.addX = -this.addX;
      this.y = random(height);
    }
    this.health --;
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
    let saturationAsPercent = 100 * (this.health) / startHealth; fill ("hsla(260," + saturationAsPercent + "%, 70%, 1)");
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
