
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options={
		isStatic:false,
		restitution:0.3, 
		friction:0,
		density:1.2
	}

	ball = Matter.Bodies.circle(100, 599, 1500, ball_options)
	World.add(world, ball);
	
	Engine.run(engine);

	groundObj=new Ground(width/2, 770, width, 20);
	leftSide = new Ground(500, 700, 20, 120);
    rightSide = new Ground(700, 700, 20, 120);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed(){
	if(keyCOde === UP_ARROW){

       Matter.Body.applyForce(ball, 200, -10)

	}
}

