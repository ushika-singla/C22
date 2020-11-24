const Engine = Matter.Engine;  // creating the game universe
const World = Matter.World;  // help us adding the bodies to the world
const Bodies = Matter.Bodies;  // create bodies which will follow the rules of physics

var myuniverse, myworld, ground;
var ball;

function setup() {
  createCanvas(400,400);
  myuniverse = Engine.create();
  myworld = myuniverse.world;

  var ground_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,380,400,20,ground_options);

  World.add(myworld, ground);

  console.log(ground);

  var ball_options = {
    restitution:0.8
  }

  ball = Bodies.circle(200,200,15,ball_options);
  World.add(myworld, ball);
}

function draw() {
  background(0);  

  Engine.update(myuniverse);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball.position.x,ball.position.y,30,30);
}