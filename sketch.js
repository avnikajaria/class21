var fixedRect, movingRect;
var newRect;
var r1, r2; 

function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  newRect = createSprite(100,100,50,50);
  r1 = createSprite(450,100,50,60);
  r2 = createSprite(450,200,50,40);
  r1.velocityY = +4;
  r2.velocityY = -4;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  newRect.shapeColor = "blue";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255, 255, 255);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 // text("movingRect.x-fixedRect.x  = " + (movingRect.x - fixedRect.x), 300, 50);//65-->40+25=65

  if(isTouching(movingRect,newRect)){
    newRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  } //Telling the computer

  else{
    newRect.shapeColor = "blue";
    movingRect.shapeColor = "green";
  }
  
  drawSprites();
}


