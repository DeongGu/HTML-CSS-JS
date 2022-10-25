const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

solution(+input);

function solution(N){
    let a = 1;
    let count = 1;
    for(let i = 0; i < N; i++){
        if(N > a){
            a = a + 6*count;
            count++
        }else{
            console.log(count);
            break;
        }
    }
}

// 1개 1   1개
// 6개 1~7 2개
// 12개 7~19 3개
// 18개 19~37 4개
// 24개 37~61 5개
// 13 /1+6+12/ 6*2=12               3
// 58 /1+6+12+18+24 / 6*9=54        5