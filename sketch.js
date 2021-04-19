var trex, trex1, trex2, trexEnd;
var ground1, ground2, ground3;
var obs1, obs2, obs3, obs4, obstaclesGroup;
var coin, r, score;

function preload(){

trexAnimation = loadAnimation("trex1.png","trex2.png");
trexEndimg = loadImage("pictures/trexEnd.png");
obs1img = loadImage("pictures/obs1.png");
obs2img = loadImage("pictures/obs2.png");
coinimg = loadImage("pictures/coin.png");

score = 0;
}

function setup() {
createCanvas(displayWidth, displayHeight);
trex = createSprite(50, displayHeight/4*2-30, 10, 10);
trex.addAnimation("trexRun",trexAnimation);
trex.scale = 0.5;

//trex.collide(ground1);
//trex.collide(ground2);
//trex.collide(ground3);

ground1 = createSprite(250, displayHeight/4, 2500, 10);
ground1.shapeColor="brown";
ground2 = createSprite(250, displayHeight/4*2, 2500, 10);
ground2.shapeColor="brown";
ground3 = createSprite(250, displayHeight/4*3, 2500, 10);
ground3.shapeColor="brown";

obstaclesGroup = new Group();
}

function draw() {
  background(255,255,255);
  spawnObstacles1();  
  spawnObstacles2();
  spawnObstacles3();

  if(obstaclesGroup.isTouching(trex)){
    //gameState = END;
}
  //if (gameState===PLAY){
    //score = score + Math.round(getFrameRate()/60);
   // ground.velocityX = -(6 + 3*score/100);
  

   trex.collide(ground1);
   trex.collide(ground2);
   trex.collide(ground3);
   trex.collide(obstaclesGroup);

    if(keyDown("space")) {
      trex.velocityY = -12;
    }
  
    trex.velocityY = trex.velocityY + 0.8;
    console.log(trex.y);
  drawSprites();
}

function spawnObstacles1(){
  var r1 = Math.round(random(60, 90));
if(frameCount % r1 === 0) {
  var obstacle1 = createSprite(ground1.x+displayWidth/2, ground1.y-20, 10, 30);
  obstacle1.scale = 0.5;
  obstacle1.velocityX = -3;
  var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle1.addImage(obs1img);
              break;
      case 2: obstacle1.addImage(obs2img);
              break;
     // case 3: obstacle.addImage(obstacle3);
            //  break;
     // case 4: obstacle.addImage(obstacle4);
             // break;
      default: break;
    }
    obstaclesGroup.add(obstacle1);
}
}

function spawnObstacles2(){
  var r2 = Math.round(random(60, 90));
  if(frameCount % r2 === 0) {
    var obstacle2 = createSprite(ground2.x+displayWidth/2, ground2.y-20, 10, 30);
    obstacle2.scale = 0.5;
    obstacle2.velocityX = -3;
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstacle2.addImage(obs1img);
                break;
        case 2: obstacle2.addImage(obs2img);
                break;
       // case 3: obstacle.addImage(obstacle3);
              //  break;
       // case 4: obstacle.addImage(obstacle4);
               // break;
        default: break;
      }
      obstaclesGroup.add(obstacle2);
  }
  } 

  function spawnObstacles3(){
    var r3 = Math.round(random(60, 90));
    if(frameCount % r3 === 0) {
      var obstacle3 = createSprite(ground3.x+displayWidth/2, ground3.y-20, 10, 30);
      obstacle3.scale = 0.5;
      obstacle3.velocityX = -3;
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1: obstacle3.addImage(obs1img);
                  break;
          case 2: obstacle3.addImage(obs2img);
                  break;
         // case 3: obstacle.addImage(obstacle3);
                //  break;
         // case 4: obstacle.addImage(obstacle4);
                 // break;
          default: break;
        }
        obstaclesGroup.add(obstacle3);
    }
    }