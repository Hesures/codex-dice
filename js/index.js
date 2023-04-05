

// ROLLING DICES BY CLICKING
document.querySelector(".dice-button").addEventListener("click",function(){
// rolling audio
var diceRoll = new Audio("sound/rolldice.mp3");
diceRoll.play();
// dice 1
var rollDice1 = Math.floor(Math.random()*6+1);
var sourceDiceImg1 = "images/dice" + rollDice1 + ".png";
var changeDiceImg1 = document.querySelector(".img-dice1").setAttribute("src",sourceDiceImg1);
// dice 2
var rollDice2 = Math.floor(Math.random()*6+1);
var sourceDiceImg2 = "images/dice" + rollDice2 + ".png";
var changeDiceImg2 = document.querySelector(".img-dice2").setAttribute("src",sourceDiceImg2);

// result
var rollResult = rollDice1 + rollDice2;
var changeRollResult = document.querySelector(".diceRollResult").innerHTML=rollResult;
document.querySelector(".diceRollResult").style.fontSize="2.5rem";
document.querySelector(".diceRollResult").style.fontFamily="'Cinzel'";

});





