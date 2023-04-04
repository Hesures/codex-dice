

// ROLLING DICES BY CLICKING
document.querySelector(".dice-button").addEventListener("click",function(){
// ROLLING AUDIO
let diceRoll = new Audio("sound/rolldice.mp3");
diceRoll.play();
// DICE 1
let rollDice1 = Math.floor(Math.random()*6+1);
let sourceDiceImg1 = "images/dice" + rollDice1 + ".png";
let changeDiceImg1 = document.querySelector(".img-dice1").setAttribute("src",sourceDiceImg1);
// DICE 2
let rollDice2 = Math.floor(Math.random()*6+1);
let sourceDiceImg2 = "images/dice" + rollDice2 + ".png";
let changeDiceImg2 = document.querySelector(".img-dice2").setAttribute("src",sourceDiceImg2);
});

// let rollResult = rollDice1 + rollDice2;


