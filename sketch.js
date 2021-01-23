const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, platform1, platform2, hex, string;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17, block18, block19, block20, block21, block22;
var score = 0;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 700, 900, 5);

  platform1 = new Ground(400, 630, 300, 5);
  platform2 = new Ground(625, 450, 300, 5);

  block1 = new Block(340, 620, 20, 30);
  block2 = new Block(360, 620, 20, 30);
  block3 = new Block(380, 620, 20, 30);
  block4 = new Block(400, 620, 20, 30);
  block5 = new Block(420, 620, 20, 30); 
  block6 = new Block(440, 620, 20, 30);
  block7 = new Block(460, 620, 20, 30);
  block8 = new Block(360, 590, 20, 30);
  block9 = new Block(380, 590, 20, 30);
  block10 = new Block(400, 590, 20, 30);
  block11 = new Block(420, 590, 20, 30);
  block12 = new Block(440, 590, 20, 30);
  block13 = new Block(400, 560, 20, 30);
  block14 = new Block(380, 560, 20, 30);
  block15 = new Block(420, 560, 20, 30);
  block16 = new Block(400, 530, 20, 30);

  block17 = new Block(605, 440, 20, 30);
  block18 = new Block(625, 440, 20, 30);
  block19 = new Block(645, 440, 20, 30);
  block20 = new Block(615, 400, 20, 30);
  block21 = new Block(635, 400, 20, 30);
  block22 = new Block(625, 380, 20, 30);
  
  hex = new Polygon(200, 200, 20, 20);

  string = new Slingshot(hex.body,{x:100, y:450});

}

function draw() {
  background(223, 207, 243);

  Engine.update(engine);

  fill(0);
  textSize(30);
  text("Score: "+score, 20, 40);

  fill(255, 82, 184);
  block1.display();

  fill(153, 250, 97);
  block2.display();

  fill(255, 82, 184);
  block3.display();

  fill(153, 250, 97);
  block4.display();

  fill(255, 82, 184);
  block5.display();

  fill(153, 250, 97);
  block6.display();
  
  fill(255, 82, 184);
  block7.display();

  fill(255, 119, 0); 
  block8.display();
  
  fill(11, 247, 237);
  block9.display();
  
  fill(255, 119, 0);  
  block10.display();
  
  fill(11, 247, 237);
  block11.display();

  fill(255, 119, 0);  
  block12.display();
  
  fill(153, 250, 97);
  block13.display();

  fill(255, 82, 184); 
  block14.display();
  
  fill(255, 82, 184);
  block15.display();

  fill(11, 247, 237); 
  block16.display();

  platform1.display();
  platform2.display();
  
  fill(38, 10, 82); 
  block17.display();

  fill(38, 10, 82); 
  block18.display();

  fill(38, 10, 82); 
  block19.display();

  fill(54, 81, 10); 
  block20.display();

  fill(54, 81, 10); 
  block21.display();

  fill(38, 10, 82); 
  block22.display();
 
  ground.display();

  hex.display();

  string.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
}

function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  string.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		string.attach(hex.body);
	}
}