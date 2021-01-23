class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      
    }

    display() {
      if (this.body.speed < 2.5) {
        super.display();
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 2;
        tint(255,this.Visiblity);
        pop();
        
      }
    }

    score() {
      if(this.visibility<0 && this.visibility>-1005) {
          score++;
      }
    }
   
  };
  
