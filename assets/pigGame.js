

    function Game (){
    this.player1 = new Player("PLAYER1");
    this.player2 = new Player("PLAYER2");
    this.dice1 = new Dice();
    this.dice2 = new Dice();
    this.player = this.player1;
    
    
}

Game.prototype.finish = function(){
    this.player1 = null;
    this.player2 = null;
    this.dice1 = null;
    this.dice2 = null;
}

function Dice () {
    this.sideOfDice = 0;
}

Dice.prototype.rollDice = function(dice){
   this.sideOfDice = Math.floor((Math.random()*6)+1) 
   return this.sideOfDice;
}

function Player (name){
 this.name = name;
 this.currentScore = 0;
 this.totalScore = 0;
}

Game.prototype.changePlayer = function (){
    
    if (this.player.name =="PLAYER1") {
       this.player = game.player2;
        
    } else {
        if (this.player.name == 'PLAYER2')
        this.player = game.player1;
    }
} 
Game.prototype.throwDice =function(){
   
    var score1 = game.dice1.rollDice();
    var score2 = game.dice2.rollDice();
   
    var sum = 0;
    if (score1 != 1 && score2 != 1 ){
        sum = (score1 + score2);
       
        this.player.currentScore += sum;
       
    } else {
            this.player.currentScore = 0;
            game.changePlayer();
            this.player.currentScore += sum;
        } 
     } 

Game.prototype.holdDice = function() {
    this.player.totalScore +=this.player.currentScore;
    this.player.currentScore = 0;
   
    if (this.player.totalScore >= 100) {
        alert ('game over')
        game.finish();
        
    } 
    
   
}

// var game = new Game();
 
// game.throwDice();
// console.log(game);
// console.log()
// game.holdDice();
// console.log(game);
// console.log()
// game.throwDice();
// console.log(game);
// console.log()
// game.throwDice();
// game.holdDice();
// console.log(game);



