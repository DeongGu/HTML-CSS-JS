const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);
function solution(n){
    let testCaseArray = n[1].split(' ').map((item)=>+item);
    let MaxElement = Math.max(...testCaseArray);
    let MinElement = Math.min(...testCaseArray);
    console.log(`${MinElement} ${MaxElement}`);
}