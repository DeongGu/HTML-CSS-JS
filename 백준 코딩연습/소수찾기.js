// const n = 10;
const n = 5;

function solution(n) {
    const answer = [];
    for(let i = 2; i <= n; i++){
        for(let j = 2; j <= i-1; j++){
            if(i%j === 0){
                answer.push(i);
                break;
            }
        }
    }
    return n - 1 - answer.length;
}

solution(n);