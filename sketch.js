const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var astronaut
var sleep
var brush
var gym
var eat
var drink
var move
var bg, bgimg
var bath

function preload(){
  sleeping = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move1.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  bgimg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  createEdgeSprite;
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  bg = createSprite(200,200);
  bg.addImage("dab", bgimg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1

  var astronaut_options = {
    restitution: 0.95,
    frictionAir:0.01

    astronaut = Bodies.circle(100,10,20,ball_options);
    World.add(world,astronaut);
  }
}

function draw() {
  background(255,255,255);  

    stroke("white");
    fill("white");
    textSize(50)
    text("Instructions: ", 25,20);

    stroke("white");
    fill("white");
    textSize(50)
    text("Up Arrow = Brushing ", 25,30);

    stroke("white");
    fill("white");
    textSize(50)
    text("Down Arrow = Gymming ", 25,40);

    stroke("white");
    fill("white");
    textSize(50)
    text("Left Arrow = Eating ", 25,50);

    stroke("white");
    fill("white");
    textSize(50)
    text("Right Arrow = Bathing ", 25,60);

    stroke("white");
    fill("white");
    textSize(50)
    text("M key = Moving ", 25,70);

  if("UP_ARROW"){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  } 

  if("DOWN_ARROW"){
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.x = 150;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  } 

  if("LEFT_ARROW"){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  } 

  if("RIGHT_ARROW"){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 150;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  } 

  if("m"){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityX = 2;
  }

  drawSprites();
}