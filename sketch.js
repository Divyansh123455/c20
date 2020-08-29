var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
   movingRect= createSprite(400, 800, 50, 50);
movingRect.shapeColor="green"
fixedRect=createSprite(400,100,50,50);
fixedRect.shapeColor="green";
fixedRect.velocityY=5;
movingRect.velocityY=-5;
}

function draw() {
  background(0);
  
  if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=-(fixedRect.velocityY);
      movingRect.velocityY=-(movingRect.velocityY);
    }


  drawSprites();
}