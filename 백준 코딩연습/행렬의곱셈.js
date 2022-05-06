// const arr1 = [
//   [1, 4],
//   [3, 2],
//   [4, 1],
// ];
// const arr2 = [
//   [3, 3],
//   [3, 3],
// ];
// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// const arr2 = [
//   [1, 4],
//   [2, 5],
//   [3, 6],
// ];
// const arr1 = [
//   [2, 3, 2],
//   [4, 2, 4],
//   [3, 1, 4],
// ];
// const arr2 = [
//   [5, 4, 3],
//   [2, 4, 1],
//   [3, 1, 1],
// ];
// const arr1 = [
//   [2, 3, 2],
//   [4, 2, 4],
//   [3, 1, 4],
// ];
// const arr2 = [
//   [5, 4],
//   [2, 4],
//   [3, 1],
// ];
const arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 0],
];
const arr2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
];

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let result = arr1[i].map((x, int) => x * arr2[int][j]);
      let resultElement = result.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      answer.push(resultElement);
    }
  }

  let lastAnswer = [];

  for (let j = 0; j < answer.length; j += arr2[0].length) {
    lastAnswer.push(answer.slice(j, j + arr2[0].length));
  }
  // return lastAnswer;
  console.log(lastAnswer);
}

solution(arr1, arr2);
