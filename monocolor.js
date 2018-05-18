

function drawHand(){
    var lands=0;
    var deckSize = 60;
    var landsRemaining = 20;
    for(var i = 0; i<7; i++) {
        if (Math.floor(Math.random() * deckSize) <= landsRemaining) {
            lands++;
            landsRemaining--;
        }

        deckSize--;
    }

    return lands;
}

function calculator() {
    var landsDrawn = 0;

    for(var i=0; i<1000000 ; i++){
        landsDrawn+=drawHand();
    }

    console.log(landsDrawn/1000000);

}

calculator();
