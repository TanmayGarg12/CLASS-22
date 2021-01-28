const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  
  
  ground=Bodies.rectangle(400,380,800,10,option);
  World.add(world,ground)
  var option={
    restitution:1
  }
  ball=Bodies.circle(400,20,20,option);
  World.add(world,ball);
  
}

function draw() {
  background("orange");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}