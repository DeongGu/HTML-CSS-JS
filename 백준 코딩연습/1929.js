const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');

let M = +input[0];
let N = +input[1]; 

// let arr = [...new Array(N)].map((_, i) => i + 1);
let arr = [];
for(let i=0; i < N; i++){
    arr.push(i);
}

for(let i = 0; i < arr.length; i++){
    for(let j = 2; j <= i; j++){
        if(arr[i]%j === 0){
            arr.splice(i,1);
        }
    }
}

const result = arr.filter(number => {
    if(number >= M && number <= N) {
        return true;
    }

    return false;
});

for(let i = 0; i < result.length; i++){
    console.log(result[i]);
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