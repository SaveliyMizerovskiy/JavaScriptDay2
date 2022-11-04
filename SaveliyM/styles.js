
function intialize(){
    diceOutput1 = document.getElementById("divOut");
    diceOutput2 = document.getElementById("divOut2");
    diceOutput3 = document.getElementById("divOut3");
}

function rollDice(){
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    display(dice1, dice2, dice1 + dice2);
}

function display(x, y, z){
    diceOutput1.innerHTML = x;
    diceOutput2.innerHTML = y;
    diceOutput3.innerHTML = z; 
}