// Functions
function hit(cards, enemyCards) {
    cards.push(Math.floor((Math.random() * 10) + 1)); // Add card

    const deleteCards = decideMove(enemyCards);

    if (calculateWinner(cards, enemyCards)) {
        alert("You won"); // TODO: add template literal to say something like this
                          // You won + playerCards > enemyCards
                          // Same thing for when player loses
    } else {
        alert("You lost");
    }

    // This function will only occur when player closes alert message
    playerCards.pop();

    if (dealerCards) {
        enemyCards.pop();
    }

    updateDisplay();  // Update the displayed cards
}

function stand(cards, enemyCards) {
    const deleteCards = decideMove(enemyCards);

    if (calculateWinner(cards, enemyCards)) {
        alert("You won");
    } else {
        alert("You lost");
    }

    if (deleteCards) {
        enemyCards.pop();
    }

    updateDisplay();  // Update the displayed cards
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

function displayCards(cards) {
    let displayString = "";

    for (let i = 0; i < cards.length; i++) {
        displayString = displayString + cards[i] + "; "
    }

    displayString += "(" + calculateCards(cards) + ")";

    return displayString;
}

function updateDisplay() {
    // Update the displayed cards
    document.querySelector("#PlayerCards").innerHTML = displayCards(playerCards);
    document.querySelector("#DealerCards").innerHTML = displayCards(dealerCards);
}

function decideMove(cards) {
    if (!Array.isArray(cards)) {
        throw new Error("Expected 'cards' to be an array");
    }

    const totalCards = calculateCards(cards);

    if (totalCards >= 19) { // Stand
        return false;
    }

    if (totalCards < 19) { // Hit
        cards.push(Math.floor((Math.random() * 10) + 1));
        return true;
    }

    // Values are useful for resetting array later
}

function calculateWinner(cards, enemyCards) { // False = Player lost;  True = Player won
    if (calculateCards(cards) > calculateCards(enemyCards)) {
        return true;
    } else {
        return false;
    }
}

function refresh() {
    location.reload();
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

updateDisplay();