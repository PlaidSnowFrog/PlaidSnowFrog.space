/*
0 - Green
1 - Red
2 - Black
*/

// Functions
function spin() { // Generate numbers
    const num = Math.floor((Math.random() * 37)); // Random number between 0 and 36

    // im sorry
    if (num == 1 || num == 3 || num ==5 || num ==9 || num ==7 || num ==12 || num ==14 || num ==18 || num ==16 || num ==21 || num ==19 || num ==23 || num ==27 || num ==25 || num ==30 || num ==32 || num ==36 || num ==34) {
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