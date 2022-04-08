const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];

const arr = input[1].split(' ').map((item) => +item);
let notAnswer = [];

for(let i = 0; i < N; i++){

    if(arr[i] > 2){
        for(let j = 2; j < arr[i]; j++){
            if(arr[i]%j === 0){
                notAnswer.push(arr[i]);
            }
        }   
    }
    if(Number.isInteger(Math.sqrt(arr[i]))=== true){
        notAnswer.push(arr[i]);
    }
}
const set = new Set(notAnswer);
const answer = [...set];
console.log(N - answer.length);