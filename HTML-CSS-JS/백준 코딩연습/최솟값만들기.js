const A = [1, 4, 2];
const B = [5, 4, 4];

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  let answer = 0;
  A.map((x, idx) => (answer += x * B[idx]));
  return answer;
}

solution(A, B);
