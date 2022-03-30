const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let A = input[0];
let B = input[1];
let C = input[2]; 
let D = Math.floor(A/(C-B))+1;
if(D <= -1 || D === Infinity){
    console.log(-1);
}else{
    console.log(D);
}