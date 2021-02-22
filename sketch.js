dog = 0
happyDog = 0
database = VirtualPet
foodS = 0
foodStock = 0 

function preload()
{
  dog = loadImage('sprites/dogImg.png')
}

function setup() {
	createCanvas(500, 500);
  var dog=createSprite(250, 250, 100, 100)
  dog.addImage('sprites/dogImg.png')
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  drawSprites();
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy);
  }
  text(foodStock)
  textSize(15)
  fill(white)
  stroke(black)
  text('Note: Press UP_ARROW Key to feed your pet milk!')
  textSize(15)
  fill(white)
  stroke(black)
}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



