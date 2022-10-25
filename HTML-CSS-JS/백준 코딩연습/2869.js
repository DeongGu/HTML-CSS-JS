const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = +input[0];
const B = +input[1];
const V = +input[2];

solution(A,B,V);

function solution(A,B,V){
   let result = Math.ceil((V-B)/(A-B));
   console.log(result);
}

// function solution(A,B,V){
//     for(let i = 0; i<V;i++){
//         if((A - B) === 1){
//             console.log(V-B);
//             break;
//         }else if(A === V){
//             console.log(1);
//             break;
//         }else if(i*(A-B)+A > V){
//             console.log(i+1);
//             break;
//         }
//     }
// }