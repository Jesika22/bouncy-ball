const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var ground2,ball2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ground2_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ground2 = Bodies.rectangle(800,500,400,20,ground2_options);
    World.add(world,ground2);

    var ball_options = {
        restitution: 1.3
    }

    var ball2_options = {
        restitution: 1.6
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(800,400,30,ball2_options);
    World.add(world,ball2);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ground2.position.x,ground2.position.y,400,20);


    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipse(ball2.position.x,ball2.position.y,30,30);
}