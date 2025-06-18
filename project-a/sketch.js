function setup() {
  //  createCanvas(800, 500);
 let canvas = createCanvas(800, 500);
 canvas.parent("p5-canvas-container");
  
}

function draw() {
  background(220);
  
  
  let ellipseX = 200;
  let ellipseY = 100;
  let ellipseRx = 90;
  let ellipseRy = 45;
  
  let lineY = ellipseY-10;
  
  
  
  fill(0)
  // are we in ellipse?
  // https://stackoverflow.com/a/76322532
  let inEllipse = false;
  if((pow((mouseX-ellipseX),2) / pow(ellipseRx,2) + pow((mouseY-ellipseY),2) / pow(ellipseRy,2))<=1){
    text("in ellipse", 200,200);
    inEllipse = true;
  }
  
  
  // are we in top left corner?
  // https://stackoverflow.com/a/9614122
//   let dy = ellipseY - mouseY
//   let dx = ellipseX - mouseX
//   theta = atan(dy/dx)
  let topLeftCorner = false
  let angleRadians = Math.atan2(mouseY - ellipseY, mouseX - ellipseX);
  // theta *= 180/PI // rads to degs
  // console.log(degrees(angleRadians))
  if(degrees(angleRadians) < -90 && degrees(angleRadians) > -180){
    text("between 180 and 270 degree", 200,220);
    topLeftCorner = true;
  }
  
  // above the line? 
  let aboveLine = false;
  if(mouseY < lineY){
    text("above the line", 200,240);
    aboveLine = true;
  }
  
  if(aboveLine && topLeftCorner && inEllipse){
    fill(100, 230, 210)
  }else{
    fill(255)
  }
  ellipse(ellipseX, ellipseY, ellipseRx*2, ellipseRy*2);
  line(ellipseX, ellipseY, mouseX, mouseY);
  line(0, lineY, width, lineY);
}