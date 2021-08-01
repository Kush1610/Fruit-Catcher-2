class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.waiting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');


    }
    hide() {
        this.greeting.hide();
        this.waiting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }

    display() {


        this.title.html("🍍🍍FRUIT CATCHER🍉🍉");
        this.title.position(400, 50);
        this.title.style('font-size', '60px');
        this.title.style('color', 'yellow');

        this.input.position(710,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');

        this.button.position(750,470);
        this.button.style('width', '120px');
        this.button.style('height', '40px');
        this.button.style('background', 'violet');

        this.reset.position(1350, 70);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(600,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');

            this.waiting.html("Waiting for others to join...")
            this.waiting.position(600,550);
            this.waiting.style('color', 'Black');
            this.waiting.style('font-size', '40px');
        });

        this.reset.mousePressed(() => {
            //add code to reset the values of the gameState and the playerCount nodes to 0 in the database
            var playerInfoRef=database.ref("players");
            playerInfoRef.remove()
            player.updateCount(0);
            game.update(0);
            Player.updatePlayerAtEnd(0)
            
        });



    }
}