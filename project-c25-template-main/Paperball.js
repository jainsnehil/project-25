class Paperball{
    constructor(){
        var options={
            restitution:0.3,
            density:1.2,
            friction:0
        }        
        this.body=Bodies.circle(50,200,30,options)
        this.w=30
        this.h=30
        World.add(world,this.body)

        this.image=loadImage("paper.png")
    }
    display(){
        push ()
        imageMode (CENTER)
        image (this.image,this.body.position.x,this.body.position.y+20,30,30)
        pop ()
    }
}