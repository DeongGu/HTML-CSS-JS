const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((item)=> +item);

solution(input);
 
function solution(input) {
    const NUMBER = 42;
    let remainder = input.map((item)=>item%NUMBER);
    const set = new Set(remainder);
    const result = [...set];
    console.log(result.length);
}