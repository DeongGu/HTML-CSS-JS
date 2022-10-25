const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(parseInt(input)-543);

// A(+input);
// function A(x) {
//     console.log(x - 543);
// }