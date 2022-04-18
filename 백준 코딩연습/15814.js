const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

let S = input[0];
let T = +input[1];
let result = {};

for(let i = 0; i<S.length; i++){
    result[i] = S[i];
}

for(let i = 2; i < T+2; i++){
   let a = result[input[i][0]];
   let b = result[input[i][2]];
   result[input[i][0]] = b;
   result[input[i][2]] = a;
}

let answer = "";

for(let i = 0; i< S.length; i++){
    answer+= result[i];    
}

console.log(answer);