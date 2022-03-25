const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const strLength = +input[0];
let testCase = [];

solution(strLength);

function solution(strLength){
   
    for(let i = 0; i<strLength; i++){
        let strNum = String(input[1])[i];
        testCase.push(strNum);
    }
    let sum = 0;
    for(let i = 0; i < testCase.length; i++){
        sum += +testCase[i];
    }
    console.log(sum);
}
