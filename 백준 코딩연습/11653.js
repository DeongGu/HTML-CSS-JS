const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let N = +input;
let i = 2;

while(N !== 1){
    if(N % i === 0){
        N = N/i;
        console.log(i);
        i = 2;
    }else{
        i+=1;
    }
}
