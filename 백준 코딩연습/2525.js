const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
let input1 = input[0].toString().split(" ");
let A1 = +input1[0];
let A2 = +input1[1];
let B = +input[1];
let C = parseInt((A2+B)/60);

if(A2+B >= 60) {
    if(A1 + C >= 24) {
        console.log(`${(A1 + C)%24} ${(A2+B)%60}`);
    } else {
        console.log(`${A1+C} ${(A2+B)%60}`);
    }
} else {
    console.log(`${A1} ${A2+B}`);
}