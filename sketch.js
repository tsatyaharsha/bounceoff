
var fixedrectangle,movingrectangle



function setup() {
  createCanvas(800,400);
fixedrectangle=createSprite(400, 200, 50, 50);
movingrectangle=createSprite(600, 200, 80, 30);
fixedrectangle.velocityX=4
movingrectangle.velocityX=-4

}


function draw() {
  background(0);
  if(movingrectangle.x-fixedrectangle.x<=fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<=fixedrectangle.width/2+movingrectangle.width/2 ){
fixedrectangle.velocityX=fixedrectangle.velocityX*(-1)
movingrectangle.velocityX=movingrectangle.velocityX*(-1)
  }  

  if(movingrectangle.y-fixedrectangle.y<=fixedrectangle.height/2+movingrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<=fixedrectangle.height/2+movingrectangle.height/2 ){
fixedrectangle.velocityY=fixedrectangle.velocityY*(-1)
movingrectangle.velocityY=movingrectangle.velocityY*(-1)
  } 

  drawSprites();
}