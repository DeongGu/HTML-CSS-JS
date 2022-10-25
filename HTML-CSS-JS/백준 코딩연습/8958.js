const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrayLength = +input[0];
const items = input.slice(1);

solution(arrayLength, items);

function solution(arrayLength, items) {
    for(let i = 0; i < arrayLength; i++){
        const testCase = items[i];
        let count = 0;
        let sum = 0;
        for(let j = 0; j < testCase.length; j++){
            const Ostr = testCase[j];
            if(Ostr === "O"){
                count++
                sum += count;
            } else {
                count = 0;
            }
        }
        console.log(sum);
    }
}
// let n = +input[0];

// for(let i = 1; i < n+1; i++){
//     let testCase = input[i].split('X');
//     let sum = 0;
//         for(let j = 0; j < testCase.length; j++){
//             sum += (testCase[j].length)*(testCase[j].length+1)/2;
//         }
//     console.log(sum);}
