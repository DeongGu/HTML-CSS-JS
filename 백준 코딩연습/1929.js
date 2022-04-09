const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');

let M = +input[0];
let N = +input[1];
let result = [];
//3 ~ 16
for(let i = 2; i < M; i++){
    if(M%i === 0){
        result.push(M);
    }
    
}


console.log(result);
