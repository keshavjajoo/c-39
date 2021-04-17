var canvas, backgroundImage;
var cars ,car1,car2,car3,car4
var gameState = 0;
var playerCount;
var allPlayers;
var cr1,cr2,cr3,cr4
var ground
var track


var database;

var form, player, game;

function preload(){
cr1=loadImage("images/car1.png")
cr2=loadImage("images/car2.png")
cr3=loadImage("images/car3.png")
cr4=loadImage("images/car4.png")
ground=loadImage("images/ground.png")
track=loadImage("images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end()
  }
}
