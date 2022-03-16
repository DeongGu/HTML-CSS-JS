const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
solution(+input);

function solution(N) {
    for(let i = 1; i <= N; i++) {
        const star = i;
        const blank = N-i;
        let result = '';
        for(let i = 0; i < blank; i++) {
            result += " ";
        }
        for(let i = 0; i < star; i++) {
            result += "*";
        }
        console.log(result);
    }
}