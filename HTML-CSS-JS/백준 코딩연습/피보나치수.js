const n = 2;
// const n = 5;

function solution(n) {
  let result = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push((result[i] % 1234567) + (result[i + 1] % 1234567));
  }
  const answer = result[n] % 1234567;
  return answer;
}

solution(n);
