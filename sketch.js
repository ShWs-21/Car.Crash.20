function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  Car = createSprite(50,150,60,60);
  Wall = createSprite(750,150,60,200);
  Car.velocityX = speed;
}


function draw() {
  background(255,255,255); 
  deformation = (0.5*weight*speed*speed)/22500;
  if(Car.isTouching(Wall)) {
  if(deformation<100){
    Car.shapeColor = "green";
    Car.velocityX = 0;
  }
  else if(deformation<180 && deformation>100)
  {
  Car.shapeColor = "yellow";
  Car.velocityX = 0;
  }
  else if(deformation>180)
  {
  Car.shapeColor = "red";
  Car.velocityX = 0;
  }
  }
  drawSprites();

}

