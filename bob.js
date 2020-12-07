class bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution : 1,
            friction: 0,
            density:0.8,

        }
        this.body = Bodies.circle(x,y,radius,options)
        this.x = x
        this.y = y
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("purple")
        ellipse (0,0,this.radius)
        pop();

    }
}