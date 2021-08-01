class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,600);
    player1.scale=0.3
    player1.addImage("player1",player_img);
    playergrp.add(player1);

    player2 = createSprite(800,600);
    player2.addImage("player2", player_img);
    player2.scale=0.3
    playergrp.add(player2)
    players=[player1,player2];


        }
    
    play(){
        p1score=0
                form.hide();
                background(back_img)
                Player.getPlayerInfo();
                player.getPlayerAtEnd();
                 //image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=600;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                       textSize(37)
                       fill("white")
                       text(allPlayers[plr].name,x-35,y+25)

                     }
                    
                     textSize(37)
                     fill("white")
                     text("Player 1:"+allPlayers.player1.score,50,50)
                     text("Player 2:"+allPlayers.player2.score,50,90)
                 }
        

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }

                 

 if(frameCount % 200 == 0) 
{
  apple=createSprite(450,0,40,10);  
  apple.addImage("apple",appleimg );
  apple.scale=0.7;
  apple.velocityY=6;
  apple.x=Math.round(random(50,1350));
  fruit1Group.add(apple);
}

 if(frameCount % 270 == 0) 
{
  banana=createSprite(450,0,40,10);  
  banana.addImage("carrot",bananaimg );
  banana.scale=0.9;
  banana.velocityY=6;
  banana.x=Math.round(random(50,1350));
  fruit2Group.add(banana);
}

 if(frameCount % 150 == 0) 
{
  melon=createSprite(450,0,40,10);  
  melon.addImage("leaf",melonimg );
  melon.scale=0.9;
  melon.velocityY=6;
  melon.x=Math.round(random(50,1350));
  fruit3Group.add(melon);
}

 if(frameCount % 120 == 0) 
{
  pineapple=createSprite(450,0,40,10);  
  pineapple.addImage("brleaf",pineappleimg  );
  pineapple.scale=0.9;
  pineapple.velocityY=6;
  pineapple.x=Math.round(random(50,1350));
  fruit4Group.add(pineapple);
}

 if(frameCount % 220 == 0) 
{
  orange=createSprite(450,0,40,10);  
  orange.addImage("orange",orangeimg );
  orange.scale=0.7;
 orange.velocityY=6;
  orange.x=Math.round(random(50,1350));
  fruit5Group.add(orange);
}

if(frameCount % 200 === 0) {
    var obstacle = createSprite(600,0,10,40);
    obstacle.velocityY = 6
    obstacle.x=Math.round(random(50,1350));
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(rotappleimg);
              break;
      case 2: obstacle.addImage(rotorangeimg);
              break;
      default: break;
    }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }




                  if (player.index !== null) {
                    for (var i = 0; i < fruit1Group.length; i++) {
                        if (fruit1Group.get(i).isTouching(players)) {
                            fruit1Group.get(i).destroy()
                            player.score=player.score+1 
                            player.update()
                     }
                    }
                    }

                    if (player.index !== null) {
                    for (var i = 0; i < fruit2Group.length; i++) {
                         if (fruit2Group.get(i).isTouching(players)) {
                                fruit2Group.get(i).destroy()
                                player.score=player.score+1 
                                player.update()
                        }
                        }
                        }

                    if (player.index !== null) {
                    for (var i = 0; i < fruit3Group.length; i++) {
                        if (fruit3Group.get(i).isTouching(players)) {
                                fruit3Group.get(i).destroy()
                                player.score=player.score+2 
                                player.update()
                        }
                        }
                        }

                    if (player.index !== null) {
                    for (var i = 0; i < fruit4Group.length; i++) {
                        if (fruit4Group.get(i).isTouching(players)) {
                                fruit4Group.get(i).destroy()
                                player.score=player.score+2
                                player.update()
                                }
                                }
                                }


                    if (player.index !== null) {
                    for (var i = 0; i < fruit5Group.length; i++) {
                        if (fruit5Group.get(i).isTouching(players)) {
                                fruit5Group.get(i).destroy()
                                player.score=player.score+1 
                                player.update()
                                }
                                }
                                }


                    if (player.index !== null) {
                    for (var i = 0; i < obstaclesGroup.length; i++) {
                        if (obstaclesGroup.get(i).isTouching(players)) {
                            obstaclesGroup.get(i).destroy()
                                player.score=player.score-1 
                                player.update()
                                }
                                }
                                } 

                   if(player.score>50)   
                   {
                    player.score=50
                   }          
                  if((player.score>49)&&(playerCount===2))
                  {

                    player.rank =player.rank+1
                    Player.updatePlayerAtEnd(player.rank)
                      //gameState=2
      
                  }
if(player.rank===1)
{
    p1score=1
    game.update(2)
}
    }

    end(){
        background(bgimg)
       console.log("Game Ended");
       var winner
       var loser
       playergrp.destroyEach();
       fruit1Group.destroyEach();
       fruit2Group.destroyEach();
       fruit3Group.destroyEach();
       fruit4Group.destroyEach();
       fruit5Group.destroyEach();
       obstaclesGroup.destroyEach();

       restart = createSprite(700,550);
       restart.addImage("player2", restartimg);
       restart.scale=0.3
     drawSprites();
    if(allPlayers.player1.score>allPlayers.player2.score)
    {
      winner=allPlayers.player1
      loser=allPlayers.player2
    }

    if(allPlayers.player2.score>allPlayers.player1.score)
    {
      winner=allPlayers.player2
      loser=allPlayers.player1
    }

       player.score=3
       if(mousePressedOver(restart))
       {
        var playerInfoRef=database.ref("players");
        playerInfoRef.remove()
        player.updateCount(0);
        game.update(0);
        Player.updatePlayerAtEnd(0)
       }
    
       textSize(40)
       textFont("Algerian");
       fill("black")
       text("Click on above buton and then press F5",330,640)

       textSize(70)
       textFont("Algerian");
       fill("red")
       text("Score Board",500,115)
       
       textSize(67)
       fill("black")
       textFont("freestyle script");
       text(winner.name,450,270)
       text(winner.score+"           1st",700,270)
       text(loser.name,450,350)
       text(loser.score+"            2nd",700,350)
       fill("green")
       text("Name       Score        Rank",450,200)
       textSize(57)
       fill(186,77,186)
       textFont("ALgerian");
       text("👑"+winner.name+" is the winner👑",380,480)
    }
}
