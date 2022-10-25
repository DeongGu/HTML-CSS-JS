const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const nameLength = +input[0];
const name = input[1];
let result = 0;
for(let i = 0; i < nameLength; i++){
    result+= name.charCodeAt(i) - 64;
}
console.log(result);


