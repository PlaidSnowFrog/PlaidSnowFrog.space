/*
0 - Green
1 - Red
2 - Black
*/

// Functions
function spin() { // Generate numbers
    const num = Math.floor((Math.random() * 37)); // Random number between 0 and 36

    // im sorry
    if (num == 1 || 3 || 5 || 9 || 7 || 12 || 14 || 18 || 16 || 21 || 19 || 23 || 27 || 25 || 30 || 32 || 36 || 34) {
        return 1; // red    
    } else if (num == 0) {
        return 0; // green
    } else {
        return 2; // black
    }
}

function bet(bet) { // Bet
    color = spin();    

    if (color == bet) {
        alert("You won!");
    } else {
        alert("You lost!");
    }
}

// Logic
// No logic :(