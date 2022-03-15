const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let A = +input;
let result = 0;
for(let i = 0; i<= A; i++) {
   result += i;
}
console.log(result);