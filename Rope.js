class Rope{

constructor(body1,body2,offsetX,offsetY)
{

this.offsetX = offsetX;
this.offsetY = offsetY;

var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
  }
  this.rope = Constraint.create(options)
  World.add(world,this.rope)

}

display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(bodyA,bodyB,offsetX,offsetY);
    pop();


}



}