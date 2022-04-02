const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const N = +input[0];
const potion = {};
for(let i = 0; i<N; i++){
    potion[i+1]=+input[1].split(' ')[i];
}
const P = input.slice(2);
console.log(P);