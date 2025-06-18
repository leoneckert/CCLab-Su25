// let kick, piano, bass;
let beatArray = [true, true, false, false, true, true, false, false];
let beat;

let played = [false, false, false, false, false, false, false, false];

let size = 100;

// time progression
let timeLineX = -1;

function preload(){
  // bap = loadSound("sounds/266566__gowlermusic__gong-hit.wav")

  beat = loadSound("sounds/Chest Beat.mp3")
  // piano = loadSound("sounds/piano.mp3")
  // bass = loadSound("sounds/bass.mp3")
}

function setup() {
  createCanvas(800, 500); 
}

function draw() {
  background(220, 30, 255);

  // for(let x = 0; x < size*5; x+=size){
  for(let i = 0; i < beatArray.length; i++){
    let x = size*i;
    // line(x, 0, x, height);
    drawBox(x, 0, size, beatArray[i])
  }

  line(timeLineX, 0, timeLineX, height);

  timeLineX+=2;
  if(timeLineX >= size*beatArray.length){
    timeLineX = 0;
    for(let i = 0; i < played.length; i++){
      played[i] = false
    }
  }
  // if(timeLineX%size == 0){
  //   console.log(timeLineX/size);
  //   let currentBeat = timeLineX/size;
  //   if(beatArray[currentBeat] == true){
  //     beat.play()
  //   }
  // }
  for(let i = 0; i < played.length; i++){
    if(played[i] == false){
      if(timeLineX>i*size){
        if(beatArray[i] == true){
          beat.play()
        }
        played[i] = true;
        break;
      }
    }
  }
}

function drawBox(x, y, size, status){
  push()
  translate(x, y);
  if(status == true){
    fill(0)
  }
  rect(0, 0, size, size)

  pop()
}



function mousePressed(){
  beat.play()
}