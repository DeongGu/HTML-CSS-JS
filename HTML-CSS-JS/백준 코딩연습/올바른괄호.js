// const s = "()()";
// const s = "(())()";
// const s = ")()(";
// const s = "(()(";
const s = "())(()";

function solution(s) {
  let sArray = [...s];
  let left = 0;

  if (sArray[0] === ")" || sArray[sArray.length - 1] === "(") {
    return false;
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === "(") {
      left++;
    } else if (left >= 1 && sArray[i] === ")") {
      left--;
    }
  }

  if (left === 0) {
    return true;
  } else {
    return false;
  }
}
// function solution(s) {
//   let answer = s;
//   let count = 0;
//   while (count !== s.length) {
//     answer = answer.replace("()", "");
//     count++;
//   }
//   if (answer.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
solution(s);
