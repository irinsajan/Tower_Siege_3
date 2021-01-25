class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
        this.Visibility = 255;
      
    }

    display() {
      if (this.body.speed < 2.5) {
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 2;
        tint(255,this.Visibility);
        pop();
        
      }
    }

    score() {
      if(this.Visibility<0 && this.Visibility>-105) {
          score++;
      }
    }
   
  };
  
