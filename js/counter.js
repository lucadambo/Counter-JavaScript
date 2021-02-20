let counterDisplayElem = document.getElementById("counter-display");
let buttonMinus = document.getElementById("counter-minus");
let buttonPlus = document.getElementById("counter-plus");
let count = 0;

updateDisplay();

buttonMinus.onclick = function() {
  count -= 1;
  updateDisplay();
}


count = 0;
buttonPlus.onclick = function() {
  count += 1;
  updateDisplay();
}

function updateDisplay(){
    counterDisplayElem.innerHTML = "Il conteggio aggiornato è : "+count;
}
