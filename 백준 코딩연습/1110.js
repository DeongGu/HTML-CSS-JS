// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

const input = "0";

solution(+input);
function solution(N){
    let cycle = 0;
    let result;
    let ten = 0;
    let one = 0;
    if(N < 10){
        ten = 0;
        one = N;
    }else{
        ten = +N[0];
        one = +N[1];
    }
    
    while(N !== result){
        
        let result1 = String(ten+one).padStart(2,"0");
        result = String(one) + result1[1];
        ten = +result[0];
        one = +result[1];
        cycle++;
    }
    console.log(cycle);
}
