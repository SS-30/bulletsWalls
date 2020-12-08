var thickness,wall
var bullet,speed,weight
function setup() {
  createCanvas(1200,800);
    
  //weight=Math.round(random(30,52))
  //speed=Math.round(random(223,321))
  //thickness=Math.round(random(22,83))
  weight=32
  speed=223
  thickness=70
  bullet=createSprite(400, 400, 50, 50);
  bullet.velocityX=speed
  wall=createSprite(1000,400,20,height/2)
}

function draw() {
  background("black");

  if(bullet.x-wall.x>bullet.width/2+wall.width/2){
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
     bullet.velocityX=0
     if(damage<10){
       wall.shapeColor="green"
     }
     else{
       wall.shapeColor="red"
     }
  }
  drawSprites();
}