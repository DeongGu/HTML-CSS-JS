const a = [1,2,3,4];
const b = [-3,-1,0,2];

function solution(a, b) {
    let answer = 0;
    a.map((x,idx) => answer += x*b[idx]);
    return answer;
}

solution(a,b);