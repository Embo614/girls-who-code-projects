/* VARIABLES */
let catcher, firstFallingObject, secondFallingObject;
let score = 0;
let backgroundImg, catcherImg, firstFallingObjectImg, secondFallingObjectImg;

/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/background.png");
  catcherImg = loadImage("assets/catcher.png");
  firstFallingObjectImg = loadImage("assets/falling.png");
  secondFallingObjectImg = loadImage("assets/moreFalling.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Resize images
  backgroundImg.resize(80,0);
  catcherImg.resize(90,0);
  firstFallingObjectImg.resize(40,0);
  secondFallingObjectImg.resize(40,0);
  
  //Create catcher
  catcher = new Sprite(200, 350, 90, 45, "k");
  catcher.img = catcherImg;
  
  //Create first falling object
  firstFallingObject = new Sprite(firstFallingObjectImg, 100, 0, 40);
  firstFallingObject.vel.y = random(1, 4);
  firstFallingObject.rotationLock = true;

  //Create second falling object with image assigned
  secondFallingObject = new Sprite(secondFallingObjectImg, 200, 0, 30);
  secondFallingObject.vel.y = random(1, 4);
  secondFallingObject.rotationLock = true;
}

/* DRAW LOOP REPEATS */
function draw() {
  background(0,105,148);

  //Draw background image
  image(backgroundImg, 10, 40);
  
  // Draw directions to screen
  fill(255,255,255);
  textSize(12);
  textAlign(LEFT);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects. Avoid \ncatching fish.", width-100, 20);

  //--- FIRST FALLING OBJECT MECHANICS ---
  if (firstFallingObject.y >= height) {
    firstFallingObject.y = 0;
    firstFallingObject.x = random(width);
    firstFallingObject.vel.y = random(1, 5);
    score = score - 1;
  } 

  if (firstFallingObject.collides(catcher)) {
    firstFallingObject.y = 0;
    firstFallingObject.x = random(width);
    firstFallingObject.vel.y = random(1, 5);
    firstFallingObject.direction = "down";
    score = score + 1;
  }

  //--- SECOND FALLING OBJECT MECHANICS ---
  if (secondFallingObject.y >= height) {
    secondFallingObject.y = 0;
    secondFallingObject.x = random(width);
    secondFallingObject.vel.y = random(1, 5);
  }

  if (secondFallingObject.collides(catcher)) {
    secondFallingObject.y = 0;
    secondFallingObject.x = random(width);
    secondFallingObject.vel.y = random(1, 5);
    secondFallingObject.direction = "down";
    score = score - 1;
  }

  if (firstFallingObject.collides(secondFallingObject)) {
    firstFallingObject.direction = "down";
    secondFallingObject.direction = "down";
  }

  //Catcher controls
  if(kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  //Stop catcher at edges
  if (catcher.x < 50) {
    catcher.x = 50;
  } else if (catcher.x > 350) {
    catcher.x = 350;
  }

  //Draw score
  fill(255,255,255);
  textSize(20);
  textAlign(LEFT);
  text("Score = " + score, 10, 30);

  //Player loses game
  if (score < 0) {
    catcher.pos = { x: -500, y: -500 };
    firstFallingObject.pos = { x: -500, y: -500 };
    secondFallingObject.pos = { x: -500, y: -500 };
    background(0,105,148);
    fill(255,255,255);
    textSize(20);
    textAlign(CENTER);
    text("You Lose!", 200, 200);
    textSize(12);
    text("Press Run to play again.", 200, 230);
        
    noLoop();
  }

  //Player wins game
  if (score > 4) {
    youWin();
  }
}

//Function for win screen and restart
function youWin() {
  catcher.pos = { x: -500, y: -500 };
  firstFallingObject.pos = { x: -500, y: -500 };
  secondFallingObject.pos = { x: -500, y: -500 };
  background(0,105,148);
  fill(255,255,255);
  textSize(20);
  textAlign(CENTER);
  text("You Win!", 200, 200);
  textSize(12);
  text("Click the mouse anywhere to play again.", 200, 230);

  noLoop();
}

// Separate click event listener for restart
function mousePressed() {
  if (score > 4) {
    restart();
  }
}

//Reset game
function restart() {
  score = 0;
  catcher.pos = { x: 200, y: 350 };
  
  firstFallingObject.y = 0;
  firstFallingObject.x = random(width);
  firstFallingObject.vel.y = random(1, 5);
  firstFallingObject.direction = "down"; 

  secondFallingObject.y = 0;
  secondFallingObject.x = random(width);
  secondFallingObject.vel.y = random(1, 5);
  secondFallingObject.direction = "down";

  loop();
}
