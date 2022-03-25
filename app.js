alert('Welcome to 20, in this game; the first person to reach 20 or is closest to 20 when all cards are gone, will win. If the player goes over 20 or if their cards arent closer to 20 than their opponent, they lose. Press enter to move on.')

do {
var Ai = 0;
var Human = 0;

alert(`Opponent's turn first`);

do {
    var ran = Math.floor(Math.random() * 10) + 1 

    var Ai = Ai + ran

    alert(`The copmuter got: ${Ai}. Press "enter" to continue.`)

}while ( Ai < 16 )

alert(`Now your turn.`)

do {
    var ran = Math.floor(Math.random() * 10) + 1

    var Human = Human + ran

    alert(`You got: ${Human} copmuter's score was: ${Ai}. Press "enter" to continue.`)

}while ( Human < 16 )

if (( Human > Ai ) && (Ai <=20) && (Human <=20)) {
    
alert(`You've won.`)

}else if (( Ai > Human ) && (Human <=20) && (Ai <=20)) {

alert(`You've lost.`)

}else if (( Human == Ai) && (Ai <=20) && (Human <=20)) {

alert(`TIED GAME!!!`)

}else if (( Human >20) && (Ai <=20) && (Human >20)) {

    alert(`You've lost.`)
    
}else if (( Ai >20) && (Human <=20) && (Ai >20)) {

    alert(`You've won.`)
    
}
    
var replay = prompt(`Would you like to play again? If so press "y", if not press "enter"`)

}while (replay == "y" && replay != "enter")

    













