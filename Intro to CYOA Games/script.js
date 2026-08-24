/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
let bgColour = (54, 69, 79);

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  textFont("Trebuchet MS")

  // Set up the home screen
  background(bgColour);
  fill("white");
  text("APEX DRIVER: MONACO GP",
    width / 2 - 250,
    height / 2 - 100,
    500,
    200);
  fill("yellow");
  text("It's lights out and away we go in Monaco! You sit on the starting grid, revving your engine as 20 cars race toward Turn 1.",
    width / 2 - 250,
    height / 2 - 65,
    500,
    200);

  // Create buttons for all screens
  enterButton = new Sprite(width/2, height/2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);

  // New sprites created here
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.height = 50;
  enterButton.collider = "k";
  enterButton.color = "lime";
  enterButton.text = "Let's race!";

  // Check enter button
  if (enterButton.mouse.presses()) {
    print("pressed");
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if(a1Button.mouse.presses()) {
      print("Display screen 2");
      showScreen2();
      screen = 2;
      
    } else if (a2Button.mouse.presses()){
      print("Display screen 5");
      showScreen5();
      screen = 5;
     }
    } else if (screen == 2) {
      if (b1Button.mouse.presses()){
        showScreen3();
        screen = 3;
      } else if (b2Button.mouse.presses()){
        showScreen4();
        screen = 4;
      }
    }

  print(screen);
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1(){
  background(bgColour);
      text("You're on lap 15. Your race engineer radios in: tires are wearing fast. Do you push aggressively on soft tires or switch to hard tires for a long stint?",
        width / 2 - 250,
        height / 2 - 100,
        500,
        200);
      enterButton.pos = { x: -100, y: -100};
  
      // Add A1 button
      a1Button.pos = { x: width / 2 - 100, y: height / 2 + 100};
      a1Button.w = 150;
      a1Button.height = 50;
      a1Button.collider = "k";
      a1Button.color = "red";
      a1Button.text = "Push on Softs";
       
      // Add A2 button
      a2Button.pos = { x: width / 2 + 100, y: height / 2 + 100};
      a2Button.w = 150;
      a2Button.height = 50;
      a2Button.collider = "k";
      a2Button.color = "white";
      a2Button.text = "Switch to Hards";
}

function showScreen2(){
  background(bgColour);
      text(
        "Rain drops start hitting your visor! Track temperature is dropping rapidly. Do you pit immediately for intermediate rain tires or stay out to gamble on dry slicks?",
        width / 2 - 250,
        height / 2 - 100,
        500,
        200);

      // Move extra buttons of screen
      a1Button.pos = { x: -200, y: -200 };
      a2Button.pos = { x: -50, y: -50 };

      // Add b1 Button
      b1Button.pos = { x: width / 2 - 100, y: height / 2 + 100 };
      b1Button.w = 150;
      b1Button.h = 50;
      b1Button.collider = "k";
      b1Button.color = "lime";
      b1Button.text = "Pit for Inters";

      // Add b2 Button
      b2Button.pos = { x: width / 2 + 100, y: height / 2 + 100 };
      b2Button.w = 150;
      b2Button.h = 50;
      b2Button.collider = "k";
      b2Button.color = "red";
      b2Button.text = "Stay Out";
}

function showScreen3() {
  background(bgColour);
    text("Your pit crew executes a flawless 2.1 second pit stop. As your competitors slide around on dry tires, you effortlessly race through the rain and take the Chequered Flag in 1st Place! You win the Monaco GP!", 
         width / 2 - 250, height / 2 - 100,
         500,
         200);

  //Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100};
  b2Button.pos = { x: -150, y: -150};
}

function showScreen4() {
  background(bgColour);
    text("The rain gets heavier instantly. Entering Saint-Devote, your dry tires lose all grip. You hydroplane violently into the tire wall, snapping your front wing. Race Over: DNF.",
         width / 2 - 250, height / 2 - 100,
        500,
        200);

  //Move extra buttons off screen
  b1Button.pos = { x: -100, y: -100};
  b2Button.pos = { x: -150, y: -150};
}

function showScreen5() {
   background(bgColour);
      text("The hard compound tires take too long to warm up. You fall out of the tire window, lose 3 seconds per lap and your engine overheats whilst fighting back-markers. Race Over: Finished P18.",
           width / 2 - 250, height / 2 - 100,
          500,
          200);

      // Move extra buttons off screen
      a1Button.pos = { x: -200, y: -200 };
      a2Button.pos = { x: -50, y: -50};
}
