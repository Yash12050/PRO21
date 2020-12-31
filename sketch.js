var bullet,wall,speed,weight,thickness;
var damage;

function setup() {
 createCanvas(1600,400);
 bullet = createSprite(50, 200, 25, 10);
 wall = createSprite(1200,200,thickness,height/2);
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);
 bullet.velocityX = speed;
}

function draw() {
  background(0);  
 // bullet.collide(wall);
 wall.shapeColor = (80,80,80);
  if (wall.x-bullet.x < (bullet.width/2+wall.width/2)){
    bullet.velocityX=0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  }
    if (damage < 10){
      bullet.shapeColor = "green";
    }
    if (damage > 10){
      bullet.shapeColor = "red";
    }
  
  
  drawSprites();
}

function isTouching(object1,object2){
  object1.x - object2.y < object2.width/2 + object1.width/2
  && object2.y - object1 < object2.width/2 + object1.width/2
  &&  object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2
}