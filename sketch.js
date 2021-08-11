
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var gamestate = "play";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
 
}



function setup() {
  createCanvas(400, 400);
  ground = createSprite(200, 395, 400, 40);
  monkey = createSprite(50, 340);
  monkey.addAnimation('running', monkey_running)
  monkey.scale = 0.1;
  
}


function draw() {
  background(255);
  drawSprites();
  monkey.velocityY++;
  monkey.collide(ground);
  if(gamestate === "play"){
    if(keyIsDown(32)){
      monkey.velocityY = -10;
    }
    if(frameCount % 300 === 0){
      createObstacles();
    }
    if(frameCount % 80 === 0){
      createFood();
    }
    if(monkey.isTouching(FoodGroup)){
      foodGroup.removeSprites();
    }
    
  }
}

function createObstacles(){
  var obstacle = createSprite(430, 360)
  obstacle.addImage('obstacle', obstacleImage)
  obstacle.scale = 0.2;
  obstacle.velocityX = -3;
  obstacle.lifetime = 150;
  obstacleGroup.add(obstacle);
}

function createFood(){
  var food = createSprite(430, random(0, 300))
  food.addImage('food', bananaImage)
  food.scale = 0.2;
  food.velocityX = -3;
  food.lifetime = 150;
  FoodGroup.add(food);
}






