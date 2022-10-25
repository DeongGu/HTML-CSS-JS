const fs = require('fs');
const input = fs.readFeSync('/dev/stdin').toString().trim();

solution(input);

function solution(N) {
    let one = 0;
    let ten = 0;
    let result = N;
    let sum = 0;
    let count = 0;
    while(N !== result || count === 0) {
        if(+result<10){
            ten = 0;
            one = +result;
        } else {
            a = result.split("");
            one = +a[1];
            ten = +a[0];
        }
        sum = ten+one;
        if(one === 0){
            result = String(sum%10);    
        } else {
            result = String(one)+String(sum%10);
        }
        count++
        }
        console.log(count);
    }