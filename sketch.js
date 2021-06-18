var PLAY=1
var END=0
var gameState=PLAY
var ground,groundImage,InvisibleGround
var girl,girlRunning,girlCollided,girlImage
var zombie,zombieRunning,zombieAttacks
var obstaclesGroup,obstacles1,obstacles2,obstacles3,obstacles4
var score=0
var gameOver,restart,gameOverImage,restartImage
var jumpSound,dieSound,checkPointSound


function preload(){
   ground_image=loadImage("Background.png");
     girl_running=loadAnimation("Run(1).png","Run(2).png","Run(3).png","Run(4).png","Run(5).png","Run(6).png",
     "Run(7).png","Run(8).png","Run(9).png","Run(10).png","Run(11).png","Run(12).png","Run(14).png",
     "Run(15).png","Run(16).png","Run(17).png","Run(18).png","Run(19).png","Run(20).png");
     zombie_running=loadAnimation("Walk(1).png","Walk(2).png","Walk(3).png","Walk(4).png","Walk(5).png",
     "Walk(6).png","Walk(7).png","Walk(8).png","Walk(9).png","Walk(10).png");
     zombie_attack=loadAnimation("Attack(2).png","Attack(3).png","Attack(4).png","Attack(5).png",
     "Attack(6).png","Attack(7).png","Attack(8).png");
     obstacle1=loadImage("obstacle1.png");
     zombie_idle=loadImage("Stand.png");
     jumpSound = loadSound("jump.mp3")
     dieSound = loadSound("die.mp3")
     checkPointSound = loadSound("checkPoint.mp3")
     gameOverImage=loadImage("gameOver1.png");
     restartImage=loadImage("restart1.png");
     girl_collided=loadImage("Dead (30).png");
     girlImage=loadImage("Idle(1).png");
   }

function setup() {
 createCanvas(600,500);
  

}

function draw() {
 background("black");
  
 
 
  
 
  drawSprites();
  fill("lightpink");
  textSize(20);
   text("Score: "+ score, 500,50);
}

