const startMin = document.querySelector("#startMin");
const startSec = document.querySelector("#startSec");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const remainResult = document.querySelector("#display");


var trigger;
function start() {
    let min = startMin.value;
    let sec = startSec.value;
  if(min === ""){
      min = 0;
  }
  if(sec === ""){
      sec = 0;
  }
  trigger = setInterval(timer, 1000);

  function timer() {
    if(sec !== 0){
        remainResult.innerHTML=`${min}분 ${sec}초`; 
        sec-= 1;
    } else {
        if(min !==0){
            min -= 1;
            sec = 59;
        } else {
            clearInterval(trigger);
            remainResult.innerHTML = "타이머 종료";
        }
    }
            
  }
        
}

function reset(){
    startMin.value = "";
    startSec.value = "";
    remainResult.innerHTML = "";
    clearInterval(trigger);
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);
