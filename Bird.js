class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    Matter.Body.setMass(this.body,this.body.mass*3);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.visibilty=255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
this.visibilty=255;
    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      
     push();
    if(this.visibilty>0){
      this.visibilty=this.visibilty-0.2;
      tint(255,this.visibilty);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
     
      pop();
    }
    }
  }
}
