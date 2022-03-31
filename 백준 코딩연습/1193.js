const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

solution(+input);

function solution(N){
    for(let i = 1;; i++){
        let a;
        let b;
        if(N< 1+(i*(i-1))/2){
            a = i - 1;
            b = N - (a*(a-1))/2 - 1;
            if(a%2 === 1){
                console.log(`${a-b}/${1+b}`);
                break;
            }else if(a%2 === 0){
                console.log(`${1+b}/${a-b}`);
                break;
            }
        }
    }
}