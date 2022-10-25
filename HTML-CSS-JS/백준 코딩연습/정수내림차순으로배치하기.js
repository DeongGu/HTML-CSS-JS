const n = 118372;

function solution(n) {
   const result = n.toString().split("");
   result.sort((a, b) => b - a);
   let answer ="";
   result.map(x => answer+= x);
   return answer;
}

solution(n);