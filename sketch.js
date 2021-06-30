const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball,ball2,ball3,ball4,ball5;
var con;
var con2,con3,con4,con5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
	var ball_options = { 
		restitution: 1
        
	  }

	ball = Bodies.circle(400,350,10,ball_options);
	World.add(world,ball);

	con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });

	World.add(world,con);
     
    //ball2 is creating here

	ball2 = Bodies.circle(400,350,10,ball_options);
	World.add(world,ball2);

	con2 = Matter.Constraint.create({
		pointA:{x:350,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });

	World.add(world,con2);
   

	ball3 = Bodies.circle(500,350,10,ball_options);
	World.add(world,ball3);

	con3 = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });

	World.add(world,con3);

	ball4 = Bodies.circle(500,350,10,ball_options);
	World.add(world,ball4);

	con4 = Matter.Constraint.create({
		pointA:{x:450,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });

	World.add(world,con4);


	ball5 = Bodies.circle(500,350,10,ball_options);
	World.add(world,ball5);

	con5 = Matter.Constraint.create({
		pointA:{x:500,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.05
	  });

	World.add(world,con5);


	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
  
	
	

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
   
  
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,50);
  ellipse(ball2.position.x,ball2.position.y,50);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  ellipse(ball3.position.x,ball3.position.y,50);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  ellipse(ball4.position.x,ball4.position.y,50);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  ellipse(ball5.position.x,ball5.position.y,50);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);

}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0});
    }
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
