var rollinbutton = document.getElementById('rolling');
rollinbutton.addEventListener('click', rolldices);
document.body.addEventListener('keydown', rolldices);

function rolldices() {
   var diceNo1 = (Math.floor(Math.random()*6))+1;
   var diceNo2 = (Math.floor(Math.random()*6))+1;

   var winner = winnerdeclaration(diceNo1,diceNo2);
   
   document.getElementById('dice1').setAttribute('src','images/dice'+diceNo1+'.png');
   document.getElementById('dice2').setAttribute('src','images/dice'+diceNo2+'.png');
   document.getElementById('result').innerHTML=winner;

}

function winnerdeclaration(diceNo1,diceNo2) {
   var result = '';
   if (diceNo1>diceNo2) {
      result = "🚩Player 1 Wins";
   }
   else if (diceNo1<diceNo2) {
      result = "Player 2 Wins🚩";
   }
   else {
      result = "Draw";
   }
   return result;
}
