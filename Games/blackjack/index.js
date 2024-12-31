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

function calculateCards(cards) {
    let totalCards = 0;

    for (let i = 0; i < cards.length; i++) {
        totalCards += cards[i];
    }

    if (totalCards > 21) {
        totalCards -= 21;
    }

    return totalCards;
}

function decideMove(cards) { // False = Stand;  True = hit
    const totalCards = calculateCards(cards);

    if (totalCards >= 19) {
        return false;
    }

    if (totalCards <= 9) {
        return true;
    }
}

function calculateWinner(cards, enemyCards) { // False = Player lost;  True = Player won
    if (totalCards(cards) > totalCards(enemyCards)) {
        return true;
    } else {
        return false;
    }
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
