const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const T = +input[0];
const testCase =[];

//[2,1,3,2,3]
for(let i = 1; i < input.length; i+=2){
    testCase.push(input.slice(i,i+2));
}

console.log(testCase);

//1,3 0층 3호까지 합  1+2+3=6             1 1 1
//2,3 1층 3호까지 합 1+3+6=10             2 3 4
//3,3 2층 3호까지 합 1+4+9=14             3 5 7

//4,5 3층 5호까지 합 1+5+12+16=34