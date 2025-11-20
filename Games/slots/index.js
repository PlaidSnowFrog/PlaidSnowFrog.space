// Possible Symbols are: 7  #  0  $  !  %  =  ?

const Symbols = ['7', '#', '0', '$', '!', '%', '='];

function updateDisplay() {
  document.querySelector("#DisplayedSymbols").innerHTML = generate();
}

function generate() {
  let symbols = ['', '', ''];
  let output = "";

  for (let i = 0; i < symbols.length; i++) {
    let random = Math.floor(Math.random() * 7);
    
    symbols[i] = Symbols[random];
  }

  for (let i = 0; i < symbols.length; i++) {
    output += symbols[i];
  }

  if (symbols[1] == symbols[2] && symbols[2] == symbols[3]) {
    alert("Jackpot!");
  }

  return output;
}