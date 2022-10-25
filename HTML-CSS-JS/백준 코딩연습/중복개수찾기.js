const arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];
// const arr = [3, 5, 7, 9, 1];
// const arr = [1, 2, 3, 3, 3, 3, 4, 4];

function solution(arr) {
  const result = {};
  arr.sort((a, b) => a - b);
  arr.map((x) => {
    if (result[x]) {
      result[x] = result[x] + 1;
    } else {
      result[x] = 0 + 1;
    }
  });
  let answer = Object.values(result).filter((x) => x > 1);
  if (answer.length === 0) return console.log([-1]);
  console.log(answer);
}

solution(arr);
