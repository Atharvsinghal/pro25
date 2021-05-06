class boxImage{
    constructor(x,y,w,h)
    {
    var options={
    isStatic:true
    
    
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add(world,this.body)
    this.Image=loadImage("dustbingreen.png")
    }
    display()
    {
    var pos=this.body.position;
    fill("red")
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.Image,0,0,this.w,this.h)
    pop()
    }
    }