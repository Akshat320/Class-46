//variables
var roomImg, roomImg2;
var room1, room2, room3;
var gameState = 0;
var questionState = 0;
var button, buttonImg;
var o1, o2, o3;
var o1Img, o2Img, o3Img;
var bg1, bg2;
var a1, a2, a3, a4;
var musicScore = 0;
var alpha1, alpha2, alpha3, alpha4, strip;
var stripImg, alpha1Group, alpha2Group, alpha3Group, alpha4Group;
var musicN = 10
var retry, next, nextImg, retryImg;
var spideyState = 0;
var ship1, ship2, ship3, ship4, smship, kingShip, web;
var fire1, fire2, fire3, fire4;
var web2, webGroup, invisibleBlock, shipGroup, ships;
var spaceImg, smshipImg, smshipImg2, ship1Img, ship2Img, fireImg, webImg, blastImg; 

function preload()
{

  // loaded Images
    roomImg = loadImage("images/room/room.png");  
    roomImg2 = loadImage("images/room/room2.png");
    buttonImg = loadImage("images/button/start.png");
    o1Img = loadImage("images/button/musicb.png");
    o2Img = loadImage("images/button/videogb.png");
    o3Img = loadImage("images/button/mangob.png");

    a1 = loadImage("images/music/a.png");
    a2 = loadImage("images/music/d.png");
    a3 = loadImage("images/music/s.png");
    a4 = loadImage("images/music/w.png");

    stripImg = loadImage("images/music/musicStrip.png");
    nextImg = loadImage("images/button/next.png");
    retryImg = loadImage("images/button/retry.png");

    bg1 = loadImage("images/background/bg1.jpg");
    bg2 = loadImage("images/background/bg2.jpg");

    spaceImg = loadImage("images/videogame/space1.png");
    smshipImg = loadImage("images/videogame/smship.png");
    smshipImg2 = loadImage("images/videogame/smshipup.png");
    ship1Img = loadImage("images/videogame/ship1.png");
    ship2Img = loadImage("images/videogame/ship2down.png");
    webImg = loadImage("images/videogame/web.png");
    fireImg = loadImage("images/videogame/fire.png");
}


function setup()
{
    createCanvas(800, 800);

    //Sprites
    room1 = createSprite(680, 145, 180, 140);
    room1.addImage(roomImg);
    room1.visible = false;

    
    room2 = createSprite(675, 685, 180, 140);
    room2.addImage(roomImg2);
    room2.visible = false;

    
    room3 = createSprite(425, 685, 180, 140);
    room3.addImage(roomImg2);
    room3.visible = false;

    //sprite for start button
    button = createSprite(380, 400, 50, 30);
    button.scale = 0.5;
    button.addImage(buttonImg);

    // sprites for options
    o1 = createSprite(400, 550, 50, 30);
    o1.addImage(o1Img);
  
    o2 = createSprite(200, 550, 50, 30);
    o2.addImage(o2Img);
  
    o3 = createSprite(600, 550, 50, 30);
    o3.addImage(o3Img);
    o1.visible = false;
    o2.visible = false;
    o3.visible = false;

    //sprites and group for music game
    strip = createSprite(400, 400, 800, 50);
    strip.depth = 1;
    strip.scale = 0.8;
    strip.addImage(stripImg);
    strip.visible = false;

    alpha1Group = new Group();
    alpha2Group = new Group();
    alpha3Group = new Group();
    alpha4Group = new Group();

    //sprites for video game
    ship1 = createSprite(300, 750, 50, 50);
    ship1.visible = false;
    ship1.scale = 0.6;
    ship1.addImage(ship1Img);

    ship2 = createSprite(500, 750, 50, 50);
    ship2.visible = false;
    ship2.scale = 0.6;
    ship2.addImage(ship1Img);

    next = createSprite(900, 500, 50, 50);
    next.addImage(nextImg)
    next.scale = 0.3;

    smship = createSprite(400, 50, 50, 50);
    smship.visible = false;
    smship.addImage(smshipImg);
    smship.scale = 0.7;

    web = createSprite(400, 50, 10, 20);
    web.visible = false;
    web.scale = 0.2;
    web.addImage(webImg);
    
    fire1 = createSprite(400, 50, 10, 20);
    fire1.visible = false;
    fire1.scale = 0.2;
    fire1.addImage(fireImg);
   
    fire2 = createSprite(400, 50, 10, 20);
    fire2.visible = false;
    fire2.scale = 0.2;
    fire2.addImage(fireImg);
    
    fire3 = createSprite(400, 50, 10, 20);
    fire3.visible = false;
    fire3.scale = 0.2;
    fire3.addImage(fireImg);
    
    fire4 = createSprite(400, 50, 10, 20);
    fire4.visible = false;
    fire4.scale = 0.2;
    fire4.addImage(fireImg);

    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;

    retry = createSprite(1005, 450, 50, 50);
    retry.addImage(retryImg);
    retry.visible = false;
    invisibleBlock = createSprite(400, 400, 800, 20);
    invisibleBlock.visible = false;

    webGroup = new Group();
    shipGroup = new Group();
}

function draw()
{

background("pink");
edges = createEdgeSprites();

ship1.bounceOff(edges[0]);
ship1.bounceOff(edges[1]);
ship2.bounceOff(edges[0]);
ship2.bounceOff(edges[1]);
//function to be executed if gameState is equal to 0 and mouse pressed of start button
if(gameState === 0)
{
 if(mousePressedOver(button))
 {
  gameState = 1;
  
 }
}

//function to be executed if gameState is equal to 1
if(gameState === 1 && musicScore<1)
{
  questionState = 1;

  background("lightGreen");
  button.visible = false; 
  
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;
  
  textSize(20);
  fill("red");
  text("Boy wants to play something which everybody enjoys", 160, 340);
  text("when they are happy, But understands when they are sad!!", 150, 375);

}



if(musicScore===100)
{
  gameState = 3;
}

if(musicN<1)
{
  gameState = 1;
}

if(gameState===3)
{
  background("pink");

  strip.visible = false;
  alpha1Group.destroyEach();
  alpha2Group.destroyEach();
  alpha3Group.destroyEach();
  alpha4Group.destroyEach();

  next.x = 385;
  next.y = 400;

  fill("green");
  textSize(40);
  text("You Reached The Target!!", 180, 300);
}

if(mousePressedOver(o1) && questionState === 1)
{

  gameState = 2;
  questionState = 0;
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
}

if(gameState === 2)
{
  background("pink");
  music();
  
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;
  
  fill("blue")
  textSize(20);
  text("Music Score: "+ musicScore, 600, 50);
  text("Press the letter keys on the keyboard when they touches the Music Strip", 100, 300);
  text("Negations left: " + musicN, 100, 50);
}

if (mousePressedOver(o2))
{
 
  background(spaceImg);
  spideyState = 1;
  gameState = 4;
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;

}

if(gameState === 4)
{
  background(spaceImg);
if(spideyState === 1)
{
  ship1.visible = true;
  ship2.visible = true;
  smship.visible = true;



  if(keyWentDown("f"))
  {
    web.x = smship.x;
    web.visible = true;
    web.velocityY = 4;
  }

  if(web.y>800)
  {
    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire1.y<0)
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
  }

  
  if(fire2.y<0)
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
  }

  
  if(fire3.y<0)
  {
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
  }

  
  if(fire4.y<0)
  {
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;
  }

  if(fire1.isTouching(web))
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire2.isTouching(web))
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire3.isTouching(web))
  {
    fire3.y = ship1.y;
    fire3.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire4.isTouching(web))
  {
    fire4.y = ship1.y;
    fire4.x = ship1.x-30;

    web.y = smship.y;
    web.velocityY = 0;
    web.visible = false;
  }

  if(fire1.isTouching(smship))
  {
    fire1.y = ship1.y;
    fire1.x = ship1.x-30;

    spideyState = 2;
  }

  if(fire2.isTouching(smship))
  {
    fire2.y = ship1.y;
    fire2.x = ship1.x-30;

    spideyState = 2;
  }

  if(fire3.isTouching(smship))
  {
    fire3.y = ship1.y;
    fire3.x = ship1.x-30;

    spideyState = 2;
  }

  if(fire4.isTouching(smship))
  {
    fire4.y = ship1.y;
    fire4.x = ship1.x-30;

    spideyState = 2;
  }


  if(keyWentDown("LEFT_ARROW"))
  {
    smship.velocityX = -3;
  }
  if(keyWentUp("LEFT_ARROW"))
  {
    smship.velocityX = 0;
  }

  
  if(keyWentDown("RIGHT_ARROW"))
  {
    smship.velocityX = 3;
  }
  if(keyWentUp("RIGHT_ARROW"))
  {
    smship.velocityX = 0;
  }

  if(keyWentDown("space"))
  {

  spaceSpidey();
  o1.visible = false;
  o2.visible = false;
  o3.visible = false;

  }

  if(web.isTouching(ship1))
  {

  ship1.x = 1000;
  web.x = smship.x;
  web.y = smship.y;
  }
  
  if(web.isTouching(ship2))
  {

  ship2.x = 1000;
  web.x = smship.x;
  web.y = smship.y;
  }

  if(ship1.x>900 && ship2.x>900)
  {
    spideyState = 3;
  }


}

  if(spideyState === 2)
  {
    fill("red");
    textSize(40);
    text("You Lose!!", 290, 350);
 
    ship1.visible = false;
    ship2.visible = false;
    smship.visible = false;
    fire1.visible = false;
    fire2.visible = false;
    fire3.visible = false;
    fire4.visible = false;
    web.visible = false;
    retry.visible = true;

    fire1.velocityY = 0;
    fire2.velocityY = 0;
    fire3.velocityY = 0;
    fire4.velocityY = 0;
    ship1.velocityX = 0;
    ship2.velocityX = 0;

    fire1.y = ship1.y;
    fire1.x = ship1.x-30;
    fire2.y = ship1.y;
    fire2.x = ship1.x+30;
    fire3.y = ship2.y;
    fire3.x = ship2.x-30;
    fire4.y = ship2.y;
    fire4.x = ship2.x+30;

    ship1.x = 300;
    ship2.x = 500;
    smship.x = 400;
    web.velocityY = 0;
    web.x = smship.x;
    web.y = smship.y;
    smship.velocityX = 0;
    
    retry.x = 385;
  }

  if(spideyState === 3)
  {

    smship.visible = false;
    web.visible = false;
    fire1.visible = false;
    fire2.visible = false;
    fire3.visible = false;
    fire4.visible = false;

    web.velocityY = 0;
    web.y = smship.y;
    web.x = smship.x;

    fill("green");
    textSize(35);
    text("Level 1 Completed!!", 260, 380);
    text("Press c key to Continue", 230, 430);
  }

  if(keyWentDown("c") && spideyState === 3 && gameState === 4)
  {

    spideyState = 4;
  }

  if(spideyState === 4)
  {

  fill("blue");
  textSize(35);
  text("Press Space key to Start!", 230, 380)
  }

  if(keyWentDown("space") && spideyState === 4)
  {
    spideyState = 5;
    smship.y = 750;
    smship.x = 400;
  }

  if(spideyState === 5)
  {

    smship.visible = true;
    smship.addImage(smshipImg2);

    if(keyWentDown("f"))
    {
    web2 = createSprite(400, 750, 20, 20);
    web2.x = smship.x;
    web2.y = smship.y;
    web2.velocityY = -5;
    web2.addImage(webImg);
    web2.scale = 0.2;
    webGroup.add(web2);
    }

    for(var i=0; i<shipGroup.length; i++){
    if(shipGroup.isTouching(webGroup))
    {
     shipGroup.get(i).destroy();
     webGroup.destroyEach();
    }
  }

    if(frameCount % 120 === 0)
    {

      ships = createSprite(random(50, 750), 0, 50, 50);
      ships.addImage(ship2Img);
      ships.velocityY = 5;
      ships.scale = 0.8;
      shipGroup.add(ships);

    }

    if(smship.isTouching(shipGroup))
    {

      spideyState = 2;
      shipGroup.destroyEach();
      ships.visible = false;
    }

  
    

    if(keyWentDown("LEFT_ARROW"))
    {
      smship.velocityX = -3;
    }

    if(keyWentUp("LEFT_ARROW"))
    {
      smship.velocityX = 0;
    }

    if(keyWentDown("RIGHT_ARROW"))
    {
      smship.velocityX = 3;
    }
  
    if(keyWentUp("RIGHT_ARROW"))
    {
      smship.velocityX = 0;
    }

    if(keyWentDown("UP_ARROW"))
    {
      smship.velocityY = -3;
    }
  
    if(keyWentUp("UP_ARROW"))
    {
      smship.velocityY = 0;
    }
  
    if(keyWentDown("DOWN_ARROW"))
    {
      smship.velocityY = 3;
    }
  
    if(keyWentUp("DOWN_ARROW"))
    {
      smship.velocityY = 0;
    }

    smship.collide(invisibleBlock);
  }




  if(mousePressedOver(retry) && gameState === 4)
  {
    spideyState = 1;
    retry.x = 1005;
  }
}

if (mousePressedOver(next) && gameState === 3)
{
  questionState = 2;
}

if(questionState === 2)
{

  background("lightGreen");
  
  o1.visible = true;
  o2.visible = true;
  o3.visible = true;
  
  textSize(20);
  fill("red");
  text("Boy wants to play which can help him improve his ability.", 160, 340);
  text("to reason and solve problem", 310, 375);
  next.x = 950;
}

console.log(questionState);

drawSprites();
}

function music()
{
  strip.visible = true;

  if(frameCount%59 === 0)
  {
    
    alpha1 = createSprite(random(50, 750), 0, 20, 20);
    alpha1.scale = 0.1;
    alpha1.addImage(a1);
    alpha1.velocityY = 2;
    alpha1.depth = strip.depth+1;
    alpha1Group.add(alpha1);

  }
  if(frameCount%79 === 0)
{
    alpha2 = createSprite(random(50, 750), 0, 20, 20);
    alpha2.addImage(a2);
    alpha2.scale = 0.1;
    alpha2.depth = strip.depth+1;
    alpha2.velocityY = 2;
    alpha2Group.add(alpha2);

}
  if(frameCount%89 === 0)
  {
    alpha3 = createSprite(random(50, 750), 0, 20, 20);
    alpha3.scale = 0.1;
    alpha3.depth = strip.depth+1;
    alpha3.addImage(a3);
    alpha3.velocityY = 2;
    alpha3Group.add(alpha3);
  }
    if(frameCount%97 === 0)
    {
    alpha4 = createSprite(random(50, 750), 0, 20, 20);
    alpha4.addImage(a4);
    alpha4.scale = 0.1;    
    alpha4.depth = strip.depth+1;
    alpha4.velocityY = 2;
    alpha4Group.add(alpha4);
    }


if(keyWentDown("a") && alpha1Group.isTouching(strip))
{
  musicScore = musicScore+50;
  console.log(musicScore);
}
else if(keyWentDown("a"))
{
  musicN = musicN-1
}
    
if(keyWentDown("d") && alpha2Group.isTouching(strip))
{
  musicScore = musicScore+50;
}
else if(keyWentDown("d"))
{
  musicN = musicN-1
}
    

if(keyWentDown("s") && alpha3Group.isTouching(strip))
{
  musicScore = musicScore+50;
}
else if(keyWentDown("s"))
{
  musicN = musicN-1
}
    

if(keyWentDown("w") && alpha4Group.isTouching(strip))
{
  musicScore = musicScore+50;

}
else if(keyWentDown("w"))
{
  musicN = musicN-1
} 
}

function spaceSpidey()
{

  ship1.visible = true;
  ship2.visible = true;
  smship.visible = true;

  ship1.velocityX = -3;
  ship2.velocityX = 3;

  fire1.velocityY = -4;
  fire2.velocityY = -4;
  fire3.velocityY = -4;
  fire4.velocityY = -4;

  fire1.visible = true;
  fire2.visible = true;
  fire3.visible = true;
  fire4.visible = true;

}
 
function ssretry()
{
  fire1.visible = true;
  fire2.visible = true;
  fire3.visible = true;
  fire4.visible = true;
}