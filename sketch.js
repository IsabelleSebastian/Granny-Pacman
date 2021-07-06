const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var backgroundImg, pacman, pacmanImg, ghost, ghostImg

function preload() {
 backgroundImg = loadImage("background.jpg")
 pacmanImg = loadImage("face.png")
 ghostImg = loadImage("ghost.jpg")
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	engine = Engine.create();
	world = engine.world;

	pacman = createSprite(200,200)
	pacman.addImage(pacmanImg)
}

function draw() {
  
  background("grey");
  Engine.update(engine)
  image(backgroundImg, 0, 0, displayWidth, displayHeight)

  //spawnGhost() 


drawSprites();
}

function spawnGhost() {
	if(frameCount/60 === 0){
		ghost = createSprite(0,500)
		ghost.addImage(ghostImg)
		ghost.velocityX = 5
	}
}