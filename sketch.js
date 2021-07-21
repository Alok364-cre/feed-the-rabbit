var garden,rabbit;
var gardenImg,rabbitImg;
var apple,AppleImg;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  AppleImg = loadImage("apple.png");
  leafImg =loadImage("leaf2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites=Math.round(random(1,3));
if(frameCount % 80==0){
  if(select_sprites==1){
    {createApple();}}
  else if(select_sprites == 2){createApple();}
 else {createApple();}}

 var select_sprites=Math.round(random(1,10));
if(frameCount % 100==0){
  if(select_sprites==1){
    {createleaves();}}
  else if(select_sprites == 5){createleaves();}
 else {createleaves();}}

 drawSprites();
}

function createApple(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage("apple",AppleImg);
  apple.scale=0.07;
  apple.velocityY=5;
  apple.lifetime=150;
 }

 function createleaves(){
  leaf=createSprite(random(100,250),50,10,10);
  leaf.addImage("leaf",leafImg);
  leaf.scale=0.09;
  leaf.velocityY=5;
  leaf.lifetime=160;
 }