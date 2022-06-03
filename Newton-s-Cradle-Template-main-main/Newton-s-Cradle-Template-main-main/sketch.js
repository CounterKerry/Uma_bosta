const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;
const body = Matter.Body;

function setup() {
	createCanvas(800, 600);

	var ball_option = {
		isStatic: true,
	}

	ball = Bodies.cirle(400, 300, 20, ball_option);
	world.add(world, ball);

	engine = Engine.create();
	world = engine.world;

}

function draw() {
	background(51);

	Engine.update(engine);

	ellipse(ball.position.x, ball.position.y, 20);
}