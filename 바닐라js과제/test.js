const btn = document.querySelector("#startBtn");
const result = document.querySelector("#resultSpace");
const userResult = document.querySelector("#userResult");
const contents = document.querySelector("#contents");

function play() {
  let range = document.querySelector("#rangeNumber").value;
  let guess = document.querySelector("#guessNumber").value;
  let randomNumber = Math.round(Math.random() * parseInt(range));
  result.innerHTML = `You chose: ${guess}, the machine chose: ${randomNumber}.`;

  if(parseInt(guess) === randomNumber) {
      userResult.innerHTML = "<b>You won!</b>";
  }else {
      userResult.innerHTML = "<b>You lost!</b>";
  }
  
}

btn.addEventListener("click", play);