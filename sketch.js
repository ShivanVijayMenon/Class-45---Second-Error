var backGround
var gameState = 0;
var button, button2, button3, button4;
var dHeight = 0;
var dWidth = 0;
var nextArrow, startImage, starting;
var allPlayers;
var playerCount;
var form, formSprites, player, game;

var Kit1Image, Kit2Image, Kit3Image;
var kit1, kit2, kit3;

var database;

function preload(){

    backGround = loadImage("Images/Background.png");
    nextArrow = loadImage("Images/nextArrow.png");
    startImage = loadImage("Images/start.png");
    woodenBoardImage = loadImage("Images/boardwithText.png");

    Kit1Image = loadImage("Images/Kit1.png");
    Kit2Image = loadImage("Images/Kit2.png");
    Kit3Image = loadImage("Images/Kit3.png");

}

function setup(){

    database = firebase.database();

    dHeight = displayHeight - 110;
    dWidth = displayWidth - 20;

    createCanvas(dWidth, dHeight);

    button = createSprite(dWidth - 50, dHeight - 50, 50, 50);
    button.addImage("button", nextArrow);
    button.scale = 0.1;

    button2 = createSprite(dWidth -100, dHeight - 200 , 50, 50, 50);
    button2.addImage("button", nextArrow);
    button2.scale = 0.1;
    button2.visible = false;

    button3 = createSprite(dWidth + 50, dHeight + 50, 50, 50);
    button3.addImage("button", nextArrow);
    button3.scale = 0.1;

    starting = createSprite(dWidth / 2, dHeight /2);
    starting.addImage("start", startImage);
    starting.scale = 0.5;

    woodenBoard = createSprite(dWidth/ 2, dHeight/2 + 50);
    woodenBoard.addImage("goal", woodenBoardImage);
    woodenBoard.scale = 0.6;

    game = new Game();
    game.getState();

    var reset = createButton('reset');
    reset.position(100, 100);

    reset.mousePressed(()=> {

        game.update(0);
        player.updateCount(0);

        database.ref('/').update({
  
          players : null
  
        })

    })

}

function draw(){

    background(backGround);

    starting.visible = false;
    woodenBoard.visible = false;

    if(gameState === 0){
    
        //Game Title

        textSize(50);
        fill("white");
        strokeWeight(8);
        stroke("black")
        text("Dungeon Escape", dWidth/2 - 200, 100);   

        //Visibility of Start

        starting.visible = true;

        if(mousePressedOver(button)){

            gameState = 1;
            button.destroy();
            button2.visible = true;

        }

    }

    if(gameState === 1){   

        textSize(50);
        fill("white");
        strokeWeight(8);
        stroke("black");
        text("Dungeon Escape", dWidth/2 - 200, 100);  

        woodenBoard.visible = true;

        if(mousePressedOver(button2)){
            
            game.update(2);

        }

        if(gameState === 2){

            game.setRole();

            //Display Kit Sprites
            formSprites = new FormSprites();
            formSprites.display();

            form = new Form();
            form.display();

        }
        
    }
    
    drawSprites();

     
    console.log(gameState);
}

