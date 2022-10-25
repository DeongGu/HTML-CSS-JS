const n = 123;

function solution(n) {
    let answer = 0;
    n.toString().split("").map(x => answer += x);
   return answer;
}

function solution(n) {
    let answer = n.toString().split("").map(x => +x).reduce((a,b) => a+b);
   return answer;
}