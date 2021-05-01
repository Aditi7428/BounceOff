var fixedRect, movingRect;
var car, wall, wall2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  car = createSprite(300,200,45,45);
  car.shapeColor = "orange";
  car.velocityX=6;

  wall = createSprite(800,200,30,100);
  wall.shapeColor = "orange";

  wall2 = createSprite(200,200,30,100);
  wall2.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  BounceOff(car,wall);
  BounceOff(car,wall2)
  drawSprites();
}
function BounceOff(object1,object2){
  //algorithem for the width
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
//algorithem for the hight 
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
  }
}