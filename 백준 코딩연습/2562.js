const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let testNumberArray = input.map((item) => +item);
let MaxElement = Math.max(...input);
let order= 1;
for(let i = 0; i < testNumberArray.length; i++){
    if(+input[i] === MaxElement){
       break;
    }
    order++
}
console.log(`${MaxElement}
${order}`);