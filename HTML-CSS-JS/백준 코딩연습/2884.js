const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
let A = parseInt(input[0]);
let B = parseInt(input[1]);
if(B >= 45) {
    console.log(`${A} ${B-45}`);
} else {
    if(A === 0) {
        console.log(`${23} ${B+15}`);
    }else{
        console.log(`${A-1} ${B+15}`);
    }    
}