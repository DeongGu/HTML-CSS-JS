const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = +input;

for (let i = 1; i <= N; i++) {
  console.log("*".repeat(i));
}
// let N = +input;
// let result = ''
// let A = "*";
// for(let i = 0; i < N; i++) {
//     result += A +"\n"
//     A += "*"
// }
// console.log(result);
