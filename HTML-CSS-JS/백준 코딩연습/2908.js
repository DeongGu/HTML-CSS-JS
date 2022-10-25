const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');

solution(input[0], input[1]);

function solution(first, second){
    let firstNum = first.split('');
    let firstOne = firstNum[0];
    let firstTwo = firstNum[1];
    let firstThird = firstNum[2];

    firstOne = firstNum[2];
    firstThird = firstNum[0];
    
    let firstSum = +(firstOne + firstTwo + firstThird);
    
    let secondNum = second.split('');
    let secondOne = secondNum[0];
    let secondTwo = secondNum[1];
    let secondThird = secondNum[2];
    secondOne = secondNum[2];
    secondThird = secondNum[0];
    
    let secondSum = +(secondOne + secondTwo + secondThird);

    if(firstSum > secondSum){
        console.log(firstSum);
    }else{
        console.log(secondSum);
    }
}
