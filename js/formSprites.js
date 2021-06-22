class FormSprites {

    constructor(){

    

    }

    display(){
        
        kit1 = createSprite(dWidth/2 - 100, dHeight /2 + 200, 50, 50);
        kit1.addImage("kit", Kit1Image);
        kit1.scale = 0.2;

        kit2 = createSprite(dWidth/2, dHeight/2 + 200, 50, 50);
        kit2.addImage("kit2", Kit2Image);
        kit2.scale = 0.2;

        kit3 = createSprite(dWidth/2 + 100, dHeight/2 + 200, 50, 50);
        kit3.addImage("kit3", Kit3Image);
        kit3.scale = 0.2;

        push ();

        drawSprites();

        pop ();

    }

}