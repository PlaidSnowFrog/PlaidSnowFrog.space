// Possible Symbols are: 7  #  0  $  !  %  =  ?

const Symbols = ['7', '#', '0', '$', '!', '%', '='];

function updateDisplay() {
  document.querySelector("#DisplayedSymbols").innerHTML = generate();
}

function generate() {
  let symbols = ['', '', ''];
  let output = "";

  for (let i = 0; i < symbols.length; i++) {
    let random = Math.floor(Math.random * 8);
    
    symbols[i] = Symbols[random];
  }

  for (let i = 0; i < symbols.length; i++) {
    output += symbols[i];
  }

  return output;

  updateDisplay();
}