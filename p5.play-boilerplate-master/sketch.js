var bullet,wall;
function setup() {
  createCanvas(800,400);
bullet= new Bullet(random(30,52),random(223,321));
wall= new Wall(60);
}

function draw() {
  background("blue");  
  
  drawSprites();
}
class Wall {
  constructor(thickness) {
      this.x = 1200
      this.y  = 200
      this.thickness = thickness
      this.sprite = createSprite(this.x,this.y,this.thickness,this.thickness*2);
      this.sprite.shapeColor = color(80,80,80);
  }
}
class Bullet {
  constructor(weight,speed) {
  this.x = 50
  this.y = 200
  this.sprite = createSprite(this.x,this.y,50,50);
  this.weight= weight;
  this.speed= speed
  this.sprite.velocityX= this.speed;
  this.sprite.shapeColor=color(255);
}

}
function hasCollided(bullet,wall) {
bulletRightEdge=bullet.sprite.x + bullet.sprite.width;
wallLeftEdge= wall.sprite.x;
if (bulletRightEdge>=wallLeftEdge)
{ return true

}
return false
}