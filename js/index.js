const diceButton = document.querySelector(".dice-button");

// ROLLING DICES BY CLICKING
diceButton.addEventListener("click",function(){

    // rolling audio
    var diceAudio = new Audio("sound/rolldice.mp3");
    diceAudio.play();

    // dice 1
    var diceRoll1 = Math.floor(Math.random()*6+1);
    var sourceDiceImg1 = "images/dice" + diceRoll1 + ".png";
    var changeDiceImg1 = document.querySelector(".img-dice1");
    changeDiceImg1.setAttribute("src",sourceDiceImg1);

    // dice 2
    var diceRoll2 = Math.floor(Math.random()*6+1);
    var sourceDiceImg2 = "images/dice" + diceRoll2 + ".png";
    var changeDiceImg2 = document.querySelector(".img-dice2");
    changeDiceImg2.setAttribute("src",sourceDiceImg2);

    // result
    var rollResult = diceRoll1 + diceRoll2;
    var changeRollResult = document.querySelector(".diceRollResult")
    changeRollResult.innerHTML=rollResult;
    document.querySelector(".diceRollResult").style.fontSize="2.5rem";
    document.querySelector(".diceRollResult").style.fontFamily="'Cinzel'";
    
});






