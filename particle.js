class Paricles{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.body = Bodies.cricle(x, y, this.r,options);
        this.color=color(random(0,255), random(0,255), random(0, 255));
        World.add(world, this.body)
    }
    display(){
        
        push();
        Translate(pos.x, pos.y);
        rotate(angle);
        imageMade(CENTER);
        nostroke();
        fill("random");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}