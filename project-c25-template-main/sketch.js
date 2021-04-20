const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var engine,world,D1,G,PB;


function setup() {
	createCanvas(400,400)
	engine=Engine.create();
	world=engine.world;
	
    D1=new dustbin();
	G=new ground();
	PB=new Paperball();
}


function draw() {
	background("light blue")
	Engine.update(engine);

	D1.display();
	G.display();
	PB.display();



 }
function keyPressed(){
	if(keyDown("space")){
		Matter.Body.applyForce(PB.body,PB.body.position,{x:70,y:-130})
	}
}
