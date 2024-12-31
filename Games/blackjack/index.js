let playerCards = [];
let dealerCards = [];

for (let i = 0; i < 2; i++) {
    playerCards[i] = Math.floor((Math.random() * 10) + 1); // Random number between 1 and 10 (inclusive)
}

for (let i = 0; i < 2; i++) {
    dealerCards[i] = Math.floor((Math.random() * 10) + 1);
}

function hit(cards) { // This should use a pointer but idk how to do that in js
    cards.push(Math.floor((Math.random() * 10) + 1));
}