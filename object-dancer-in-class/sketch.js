/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new LeonDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class LeonDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.xOffset = 0;
    this.yOffset = 0;

    this.ySpeed = 0;
    this.gravity = 0.9;
    //..
    //..
    this.rot1 = random(360);
    this.xGridIncrement = 10;
    this.xGridIncrementGOAL = this.xGridIncrement;


    this.rot2 = random(360);
    this.yGridIncrement = 10;
    this.yGridIncrementGOAL = this.yGridIncrement;

   
    this.mouthOffset1 = [random(-15, 15), random(-15, 15)];
    this.mouthOffset2 = [random(-15, 15), random(-15, 15)];
    this.mouthOffset3 = [random(-15, 15), random(-15, 15)];
    this.mouthOffset4 = [random(-15, 15), random(-15, 15)];
    
    this.armAngle = 0;

    this.armMoving = false;
    this.timeOfLastKeyPress = 0;


    // this.sinInputBodyMotion = 0;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    

    this.xOffset = sin(frameCount*0.05)*30


    // this.xOffset = sin(this.sinInputBodyMotion*0.05)*30
  
    // if(this.sinInputBodyMotion <= 400){
    //   this.sinInputBodyMotion++;
    // }
    

    if(this.armMoving == true){
      this.armAngle+=4;
    }
    // time passed since last keypress
    // let timePassedSinceKeyPress = frameCount - this.timeOfLastKeyPress;
    let timePassedSinceKeyPress = millis() - this.timeOfLastKeyPress;

    if(timePassedSinceKeyPress > 1000){
      this.armMoving = false;
    }
    

    this.mouthOffset1[0] = map(noise(frameCount*0.01), 0, 1, -15, 15)


    // gravity jump
    // apply seed to position
    this.yOffset += this.ySpeed;
    // apply gravity to spedd
    this.ySpeed += this.gravity;

    if(this.yOffset > 0){
      this.yOffset = 0
    }

    this.xGridIncrement = lerp(this.xGridIncrement, this.xGridIncrementGOAL, 0.2);
    this.yGridIncrement = lerp(this.yGridIncrement, this.yGridIncrementGOAL, 0.2);


  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x+this.xOffset, this.y+this.yOffset);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️


    // body
    push()
    translate(0, 0);
    rotate(radians(this.rot1))
    let gridXOff = constrain(this.xGridIncrement*20, 0, 100)
    for(let x = 0; x <= gridXOff; x+=this.xGridIncrement){
      stroke(255  )
      line(x, -80, x, 80)
      line(-x, -80, -x, 80)
    }
    pop()
    
    push()
    translate(0, 0);
    rotate(radians(this.rot2))
    let gridYOff = constrain(this.yGridIncrement*20, 0, 100)
    for(let y = 0; y <= gridYOff; y+=this.yGridIncrement){
      stroke(255  )
      line(-80, y, 80, y)
      line(-80, -y, 80, -y)
    }
    pop()

    // eyes
    noStroke();
    ellipse(-40, -40, 30, 50)

    if(this.xOffset > 0){
      ellipse( 40, -40, 30, 50) // eye open
    }else{
      ellipse( 40, -40, 30, 10) // eye closed
    }
    

    

    // mouth();
    push();
    translate(0, 50);
    beginShape()
    vertex(-20+this.mouthOffset1[0], -20+this.mouthOffset1[1])
    vertex(20+this.mouthOffset2[0], -20+this.mouthOffset2[1])
    vertex(20+this.mouthOffset3[0], 20+this.mouthOffset3[1])
    vertex(-20+this.mouthOffset4[0], 20+this.mouthOffset4[1])

    endShape();
    pop()


    // arm 
    push();
    translate(60, 30)
    rotate(radians(this.armAngle))
    stroke(0, 255, 0)
    strokeWeight(6);
    line(0, 0, 0, 60);

    fill("yellow");
    noStroke();
    circle(0, 0, 10)
    pop()

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  triggerA(){
    // this function will be called when the "a" key is pressed.
    // your dancer should perform some kind of reaction (i.e. make a special move or gesture) 

    this.armMoving = true;
    // this.timeOfLastKeyPress = frameCount; // frame count in the moment key was pressed
    this.timeOfLastKeyPress = millis();
  }
  triggerD(){
    // this function will be called when the "d" key is pressed.
    // your dancer should perform some kind of reaction (i.e. make a special move or gesture) 

    // this.sinInputBodyMotion = 0;
    this.ySpeed = -10;

    // this.xGridIncrementGOAL = floor(random(3,20))
    // this.yGridIncrementGOAL = floor(random(3,20))

  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/

/*
Here are the key events that your dancer should react to in some way.
*/

function keyPressed(){
  if(key == "a"){
    dancer.triggerA()
  }else if(key == "d"){
    dancer.triggerD()
  }
}