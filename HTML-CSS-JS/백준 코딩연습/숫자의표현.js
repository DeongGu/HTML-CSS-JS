const n = 18;

function solution(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if ((n - ((i - 1) * i) / 2) % i === 0 && n - ((i - 1) * i) / 2 >= i) {
      count++;
    }
  }
  return count;
}

solution(n);
