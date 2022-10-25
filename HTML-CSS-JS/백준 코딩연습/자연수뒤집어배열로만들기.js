const n = 12345;

function solution(n) {
    let result = n.toString().split("");
    const answer = [];
   result.reverse();
   result.map(x => answer.push(+x));
   return answer;
}

solution(n);