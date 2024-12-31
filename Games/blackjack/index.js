// Functions
function hit(cards) {
    cards.push(Math.floor((Math.random() * 10) + 1));
}

function displayCards(cards) {
    let displayString = "";

    for (let i = 0; i < cards.length; i++) {
        displayString = displayString + cards[i] + "; "
    }

    return displayString;
}

// Logic

// Generate cards
let playerCards = [];
let dealerCards = [];

for (let i = 0; i < 2; i++) {
    playerCards[i] = Math.floor((Math.random() * 10) + 1); // Random number between 1 and 10 (inclusive)
}

for (let i = 0; i < 2; i++) {
    dealerCards[i] = Math.floor((Math.random() * 10) + 1);
}

/*
IDPlayerCards = document.getElementById("playerCards");
IDDealerCards = document.getElementById("playerCards");

IDPlayerCards = displayCards(playerCards);
IDDealerCards = displayCards(dealerCards);
*/
document.querySelector("#PlayerCards").innerHTML = displayCards(playerCards);
document.querySelector("#DealerCards").innerHTML = displayCards(dealerCards);
