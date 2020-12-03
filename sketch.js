var boy, boyimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
boyimg = loadImage("boy.png");	


}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
    world = engine.world;

	image(boyimg,600,500,80,80);
	mango1 = new Mango(400,400,5);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  drawSprites();
 
}



