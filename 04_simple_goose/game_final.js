
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var raccoon, trashcan, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";

function preload() {

  raccoon= loadImage('https://raw.githubusercontent.com/ysaviz/trash/63af4d2db540b3f8826c7cc62c2c4901cfc888bd/trashcan.png'); //target
  trash = loadImage('https://raw.githubusercontent.com/ysaviz/ysaaccoon/00c89f7852576b30fc8791902545351f11a65e57/raccoonysa.png'); //user
  beginImg = loadImage('https://raw.githubusercontent.com/ysaviz/garbage-dump/41381bf90ebd51d76586e228776753dbdd7d68cb/Screenshot%202026-05-08%20134722.png');
}

function setup() {
  createCanvas(600, 600);
  let c =color(200, 100, 100); //text color
  fill(c);
  textAlign(CENTER);
  textSize(25); 
} // end of setup

text(str,900 , 900);
fill(191, 0, 255)

function draw() {
  
if(gameState =="begin"){
  background(beginImg);
  beginGame();
}
  
if(gameState =="L1"){
  background(0, 128, 0);
  levelOne();
}
if(gameState =="L2"){
    background(34, 139, 34);
  levelTwo();
}
if(gameState =="L3"){
    background(50, 205, 50);
  levelThree();
}
if(gameState =="Win"){
    background(0, 255, 0);
  win();
}
  text(("Score: " + score), width/2, 40);
} // end of draw

function beginGame(){
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame


function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=5){
    gameState= "L2";
  }
  line(ballx+20, bally+20, mouseX, mouseY);
  image(raccoon, ballx, bally, 40, 40);
  image(trash, mouseX-20, mouseY-20, 100, 100);
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=10){
       gameState= "L3";
  }
   image(raccoon, ballx, bally, 30, 30);
   image(trash, mouseX-20, mouseY-20, 100, 100);
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -1;
  } // end if
  if (score>=35){
       gameState= "Win";
  }
      image(raccoon, ballx, bally, 20, 20);
      image(trash, mouseX-20, mouseY-20, 100, 100);
} // end level 3

function win(){
  text("You Won", width/2, height/2);
} // end win
