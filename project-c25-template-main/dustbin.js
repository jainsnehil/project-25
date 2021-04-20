class dustbin{
	constructor(){
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0,
			density:1.2
		}
		//this.x=x
		//this.y=y
		//this.body=Bodies.rectangle(300,360,50,100,options)
		this.width=50;
		this.height=10;
		this.leftWall=Bodies.rectangle(255,320,8,82,options);
		this.rightWall=Bodies.rectangle(330,320,20,82,options);
		this.bottomWall=Bodies.rectangle(300,360,50,10,options);
		this.w=8
		this.h=82
		this.wid=50
		this.hei=10
		World.add(world,this.leftWall)
		World.add(world,this.rightWall)
		World.add(world,this.bottomWall)
		

		this.image=loadImage("dustbingreen.png")


	}
	display(){
		//rectMode(CENTER)
		//rect(this.body.position.x,this.body.position.y,this.width,this.height)
		
		
	
		
		push ()
		//rectMode(CENTER)
		//rect(this.bottomWall.position.x,this.bottomWall.position.y,this.wid,this.hei)
		//rectMode(CENTER)
		//rect(this.rightWall.position.x,this.rightWall.position.y,this.w,this.h)
		//rectMode(CENTER)
		//rect(this.leftWall.position.x,this.leftWall.position.y,this.w,this.h)
	    imageMode(CENTER)
		image(this.image,this.bottomWall.position.x,this.bottomWall.position.y-40,50,100)
		pop ()
	}
			

}