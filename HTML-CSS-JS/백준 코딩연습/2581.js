const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const M = +input[0];
const N = +input[1];

const arr = [];
const notAnswer = [];

for(let i = M; i <= N; i++){
    arr.push(i);
}

for(let i = 0; i < arr.length; i++){
    
    for(let j = 2; j < arr[i]; j++){
        if(arr[i]%j === 0){
                notAnswer.push(arr[i]);
        }
    }   

    if(Number.isInteger(Math.sqrt(arr[i]))=== true){
        notAnswer.push(arr[i]);
    }
}

const set = new Set(notAnswer);
const setNotAnswer = [...set];

const answer = arr.filter(x => !setNotAnswer.includes(x));

let sumArr = 0;
for(let i = 0; i < answer.length; i++){
    sumArr += answer[i];
}

let maxArr = Math.min(...answer);

if(answer[0] === undefined){
    console.log(-1);
}else{
    console.log(sumArr);
    console.log(maxArr);
}