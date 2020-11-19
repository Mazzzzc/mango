class Mango {
    constructor (x,y,r,) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
  
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        this.image=loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //ellipseMode(RADIUS);
      //fill(255,0,255);
      //stroke(255,0,255);
      //scale(0.5);
      //ellipse(pos.x, pos.y,this.r);
      imageMode(RADIUS);
      scale(0.1);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,this.body.position.x,this.body.position.y,578);
      
      pop();
    }
}