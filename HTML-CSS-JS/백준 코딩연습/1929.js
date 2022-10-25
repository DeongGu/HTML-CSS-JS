// const fs = require('fs');
// const input = fs.readFileSync('test.txt').toString().trim().split(' ');

// let M = +input[0];
// let N = +input[1]; 

// let arr = [...new Array(N)].map((_, i) => i + 2);

// for(let i=1; i <= N; i+=2){
//     arr.push(i);
// }

// for(let i = 0; i < arr.length; i++){
//     for(let j = 2; j*j <= arr[i]; j++){
//         if(arr[i]%j === 0){
//             arr.splice(i,1);
//         }
//     }
// }


// const result = arr.filter(number => {
//     if(number >= M && number <= N) {
//         return true;
//     }

//     return false;
// });

// for(let i = 0; i < result.length; i++){
//     console.log(result[i]);
// }

const fs = require('fs'); 
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
const [n,m] = input.shift().split(' ').map(e=>parseInt(e));
const arr = Array.from(Array(m+1).keys()); 

for(let i=2; i<=Math.sqrt(m); i++){
    if(arr[i]) {
        for(let j = i*i; j<=m; j+=i) arr[j] = false;
    } 
} 

arr.splice(0,2,false,false); 
    
for(let i = n; i<=m; i++){
    if(arr[i]) {
        console.log(arr[i]);
    }
}













// let arr =[];
// for(let i = M; i <=N; i++){
//     arr.push(i);
// }

// const aaa =[];


// for(let i = M; i <= N; i++){
//     for(let j = 2; j < i; j++){
//         if(i%j === 0){
//             aaa.push(i);
//         }
//     }
// }

// const setA = new Set(aaa);  

// let answerA = [...setA];

// let result = arr.filter(x => !answerA.includes(x));

// console.log(result.join('\n'));