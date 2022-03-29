const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, ' ');
console.log(result.length);




























// let change = ['c=','c-','dz=','d-','lj','nj','s=','z='];

// solution();
// function solution(){
//     let after = input;
//     let resultStr;
//     let count=0;
//     for(let j = 0; j < 100; j++){
//         if( after.length === 0){
//             break;
//         }else{
//         after = after.replace(change[j],'');
//         count++
//             for(let i = 0; i < change.length; i++){
//                 after = after.replace(change[i],' ');
//                 resultStr = after.replace(/(\s*)/g, "");
//             }
//         }   
//     }

//     let before = input;
//     for(let i = 0; i < change.length; i++){
//         before = before.replace(change[i]," ");
//         for(let j = 0; j <change.length; j++){
//             before = before.replace(change[j]," ");
//         }
//     }

//     let result = before.replace(/(\s*)/g, "");
//     console.log(count);
// }

