const startMin = document.querySelector("#startMin");
const startSec = document.querySelector("#startSec");
const startBtn = document.querySelector(".start-btn");
const resetBtn = document.querySelector(".reset-btn");
const remainResult = document.querySelector("#display");



function start() {
    let min = Number(startMin.value);
    let sec = Number(startSec.value);

    setInterval(timer,1000);
    function timer() {
        if(sec === 0){
            min-= 1;
            sec = 60;
            }
        }
        sec-= 1;
        remainResult.innerHTML=`${min} ${sec}`;

    }
    
}
function reset(){
    remainResult.innerHTML="";
}

startBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);
