var game = new Game;

document.addEventListener('DOMContentLoaded', function () {
    
        
    document.getElementById("newGame").addEventListener('click', function(){
          game.finish();
          game = new Game();
          document.getElementById('currentScore1').innerHTML=game.player1.currentScore;
          document.getElementById('currentScore2').innerHTML=game.player2.currentScore;
          document.getElementById('totalScore1').innerHTML=game.player1.totalScore;
          document.getElementById('totalScore2').innerHTML=game.player2.totalScore;
          
        })
        
        var roll = document.getElementById('rol') 
        roll.addEventListener('click', function(){
            document.getElementById('diceFirst').style.visibility='visible';
            document.getElementById('diceSecond').style.visibility='visible';
            playerOnTurn();
            game.throwDice();
            playerOnTurn();
            image1=game.dice1.sideOfDice;
            image2=game.dice2.sideOfDice;
            path1 = ("assets/"+image1+".png");
            path2 = ("assets/"+image2+".png");  
            document.getElementById('diceFirst').src = path1;
            document.getElementById('diceSecond').src = path2;
            if (game.player.name =="PLAYER1") {
            document.getElementById('currentScore1').innerHTML=game.player.currentScore;
            }
            else {
                if (game.player.name =="PLAYER2")
            document.getElementById('currentScore2').innerHTML=game.player.currentScore;
                    
        } 

        })

        var hold = document.getElementById('hold')

        hold.addEventListener('click', function(){
            
            game.holdDice()
            if (game.player.name =="PLAYER1") {
            document.getElementById('currentScore1').innerText=game.player.currentScore;
            document.getElementById('totalScore1').innerText=game.player.totalScore;
            
            } else {  
                if (game.player.name =="PLAYER2")  {
                document.getElementById('currentScore2').innerText=game.player.currentScore;
                document.getElementById('totalScore2').innerText=game.player.totalScore;
                } 
            }

            game.changePlayer()
            playerOnTurn();
        })
        function playerOnTurn (){
            if (game.player.name =="PLAYER1") {
                document.getElementsByClassName('red-dot')[0].style.visibility = 'visible' ;
                document.getElementsByClassName('red-dot')[1].style.visibility = 'hidden';
             }
 
             if (game.player.name =="PLAYER2") {
                 document.getElementsByClassName('red-dot')[1].style.visibility = 'visible';
                 document.getElementsByClassName('red-dot')[0].style.visibility = 'hidden' ; 
              }
            }
            
},false)