const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const str = input.trim().split('');

solution(str);
function solution(str) {
   let minTime = 0;
   for(let i = 0;i<str.length; i++){
       if(str[i] >= "W"){
           minTime += 10;
       }else if(str[i] >= "T"){
           minTime += 9;
       }else if(str[i] >= "P"){
           minTime += 8;
       }else if(str[i] >= "M"){
           minTime += 7;
       }else if(str[i] >= "J"){
           minTime += 6;
       }else if(str[i] >= "G"){
           minTime += 5;
       }else if(str[i] >= "D"){
           minTime += 4;
       }else if(str[i] >= "A"){
           minTime += 3;
       }
   }
   console.log(minTime);
}

// 1 6 2
// 2 8 3
// 3 10 4
// 4 12 5
// 5 14 6
// 6 16 7
// 7 18 8
// 8 20 9
// 9 22 10
// 0 24 11