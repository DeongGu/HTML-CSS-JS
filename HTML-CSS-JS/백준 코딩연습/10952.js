const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = [];
for(let i = 0; i < input.length; i++) {
    result[i] = input[i].split(' ');
}
for(let i = 0; i < result.length; i++) {
     result[i] = input[i].split(' ');
    let A = +result[i][0];
    let B = +result[i][1];
    if(A===0 && B===0){
        break;
    }
    console.log(A+B);
}