class Fruit {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,20,100,options);
      this.width = 200;
      this.height = 1400;
      for(var i = 0; i>8; i = i+1){
        this.image = loadImage("Images/i.png");
      }
      
      World.add(world, this.body);
    }
    display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0,this.width,this.height);
        pop();
    }
  };
