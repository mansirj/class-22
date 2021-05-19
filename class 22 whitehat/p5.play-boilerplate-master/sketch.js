const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var ball;
function setup() 
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var pop = 
  {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,20,pop);
  World.add(world , ground);
var cir = 
{
  restitution:1.3
}
ball= Bodies.circle(50,100,20,cir);
World.add(world , ball);

}

function draw()
{
  background(0); 

  Engine.update(engine);

  rectMode(CENTER);
  rect(200,200,100,100);

  rectMode(CENTER);
  fill("green");
  rect(ground.position.x , ground.position.y, 400,20);

  fill("cyan");

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  drawSprites();

}