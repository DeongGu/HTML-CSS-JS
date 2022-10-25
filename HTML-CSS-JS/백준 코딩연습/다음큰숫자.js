const n = 78;
// const n = 15;

function solution(n) {
  const result = n.toString(2);
  let count = 0;
  result.split("").forEach((x) => {
    if (x === "1") {
      count++;
    }
  });

  let answerNumber = n + 1;
  let answerCount = 0;

  while (count !== answerCount) {
    answerCount = 0;
    let answer = answerNumber.toString(2);
    answer.split("").forEach((x) => {
      if (x === "1") {
        answerCount++;
      }
    });
    answerNumber++;
  }
  return answerNumber - 1;
}

solution(n);
