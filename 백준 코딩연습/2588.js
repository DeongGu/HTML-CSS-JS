const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let A = input[0];
let B = input[1].split("");
let C = input[1];
console.log(`${A*B[2]}
${A*B[1]}
${A*B[0]}
${A*C}`);