class Paper{
    constructor(x,y){
        var options={
            isStatic = false,
            restitution = 0.3,
            friction = 0,
            density = 1.2
        }
        this.body = Bodies.circle(x,y, this.r, options);
        this.r = 40;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
    }
}