const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = +input[0];
let B = +input[1];
let C = +input[2];
if(A === B && B === C) {
    console.log(`${10000+A*1000}`);
} else {
    if(A === B) {
        console.log(`${1000+A*100}`);
    }else{
        if(B === C) {
            console.log(`${1000+B*100}`);
        }else {
            if(C === A) {
                console.log(`${1000+C*100}`);
            } else {
                console.log(`${Math.max(A,B,C)*100}`);
            }
        }
    }
}