const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);
for(let i = 1; i <= T; i++) {
    let A =input[i].split(' ');
    console.log(`Case #${i}: ${parseInt(A[0]) + parseInt(A[1])}`);
}