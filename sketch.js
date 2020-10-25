var bananaImage,obstacleImage,obstacleGroup,background,score;
function preload() {
  backImage=loadImage("jungle.jpg");
  player_running = 
loadAnimation("Monkey_01.png, Monkey_02.png, Monkey_03.png, Monkey_04.png, Monkey_05.png, Monkey_06.png, Monkey_07.png, Monkey_08.png, Monkey_09.png, Monkey_010.png");
  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  background = createSprite(400, 200, 10, 10);
  background.addAnimation("backgroundImage", backImage);
  background.velocityX = -6;
  if (background.x < 0){
      background.x = background.width/2;
    }
  background.visible = false;
  player.addAnimation("playerAnimation", player_running);
}

function draw() {
  background("white");
  if(foodGroup.isTouching(player)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  if(frameCount % 10 === 0){
    switch(score){
      case 10: player.scale=0.12;
              break;
      case 20: player.scale=0.14;
              break;
      case 30: player.scale=0.16;
              break;
      case 40: player.scale=0.18;
              break;
      default: break; 
    }
  }
  if(obstacleGroup.isTouching(player)){
    player.scale=0;
  }
  drawSprites();
}
stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 500, 50);