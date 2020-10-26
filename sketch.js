var bullet,wall, thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 10, 300);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(405,200,20,5);
  

  wall = createSprite(1500,200,thickness,height/2);

  bullet.velocityX = speed;
  
}

function draw() {
  background("black");  

wall.shapeColor = color(80,80,80)

  if (wall.x-bullet.x<bullet.width/2-wall.width/2){
   
  
  bullet.velocityX = 0;
  }

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
 bullet.velocityX = 0;
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if (damage>10){
     wall.shapeColor = color(255,0,0);
   }

   if (damage<10){
     wall.shapeColor = color(0,255,0)
   }
  }
}
 

wall.debug = false;
  drawSprites();

}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false
}
