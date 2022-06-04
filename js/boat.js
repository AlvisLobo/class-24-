class Boat {
    constructor(x, y, width, height, boatPos) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.boatPosition = boatPos; 
      this.body = Bodies.rectangle(x,y,width,height); 
      World.add(world,this.body); 
      this.image = loadImage("assets/boat.png");
    }
    display() {
    
      var angle= this.body.angle;

  
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle); 
      imageMode(CENTER);
      image(this.image, 0, this.boatPosition, this.width, this.height);
      pop();
      
    }
  } 
  