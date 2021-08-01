var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var fruits,ins;
var fruit1Group,fruit2Group,fruit3Group,fruit4Group,fruit5Group;
var restart;
var obstaclesGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var p1score=0;
var apple,banana,melon,orange ,pineapple


function preload(){
  back_img = loadImage("images/jun.jpg");
  player_img = loadImage("images/basket2.png");

  appleimg = loadImage("images/apple2.png");
  bananaimg = loadImage("images/banana2.png");
  melonimg = loadImage("images/melon2.png");
  orangeimg = loadImage("images/orange2.png");
  pineappleimg = loadImage("images/pineapple2.png");
  rotappleimg = loadImage("images/rottenapple.png");
  rotorangeimg = loadImage("images/rotorange.png");

  restartimg = loadImage("images/Restart.png");

  insimg = loadImage("images/ins.png");

  bgimg = loadImage("images/bg.jpg");

  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group(); 
  fruit5Group = new Group();
  obstaclesGroup = new Group();

}
function setup() {
  createCanvas(1400, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
 // ins = createSprite(700,350,40,40);
 // ins.scale=1.5
 // ins.addImage("player1",insimg);
 // ins.visible=false

  playergrp=new Group();
}

function draw() {
  background(back_img);


   if ((playerCount === 2)&&(p1score===0)) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }

   if (gameState === 2) {
    
     game.end();
   }
}