let dino;
let dino2;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");


  dino = new Dinosaur(100,300);
  dino2 = new Dinosaur(300,200);
}

function draw() {
  background(220);

  dino.update();
  dino.display();


  dino2.display();
}


// class definition / bllueprint
class Dinosaur{
  constructor(startX, startY){
    this.x = startX;
    this.xBoundaryRight = startX + 30;
    this.xBoundaryLeft = startX - 30;

    this.y = startY;
    this.type = random(["flying", "trex"]);  // "flying", "trex"
    this.col = color(255, random(255), 120);
    this.age = 0;
    this.speed = 1;
  }
  update(){
    this.age += 0.1;
    // this.x = sin(frameCount*0.1) * 30;
    this.x+=this.speed;
    if(this.x > this.xBoundaryRight || this.x < this.xBoundaryLeft){
      this.speed = -this.speed;
    }
  }
  display(){
    push();
    translate(this.x, this.y);

    fill(this.col);
    if(this.type == "trex"){
      rect(-30, -30, 60, 60);
      fill(0)
      text("trex", 0, 0)
    }else if(this.type == "flying"){
      ellipse(0, 0, 60, 40);
      fill(0)
      text("flying", 0, 0)
    }

    text("i am "+this.age+" years old!", 30, -30)


    fill("red");
    circle(0, 0, 5);
    pop();
  }


}