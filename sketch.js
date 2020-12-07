
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1, backImage;
var bob1, bob2, bobo3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(650, 150, 400, 30)
	bob1 = new bob(340, 500, 40)
	bob2 = new bob(420, 500, 40)
	bob3 = new bob(500, 500, 40)
	bob4 = new bob(580, 500, 40)
	bob5 = new bob(660, 500, 40)
	rope1 = new rope(roof1.body, bob1.body, -160, 0)
	rope2 = new rope(roof1.body, bob2.body, -80, 0)
	rope3 = new rope(roof1.body, bob3.body, 0, 0)
	rope4 = new rope(roof1.body, bob4.body, 80, 0)
	rope5 = new rope(roof1.body, bob5.body, 160, 0)
	Engine.run(engine);

}


function draw() {
	background("black")


	roof1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob1.body, bob1.body.position, { x: 80, y: -70 })

	}
}


