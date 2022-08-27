const test = [];

//블록문
{
  const block = 1004;
  test.push(block);
  console.log(`
블록문은 0개 이상의 문을 중괄호로 묶은 것
자바스크립트는 블록문을 하나의 실행 단위로 취급
단독으로 사용가능
일반적으로 제어문이나 함수를 정의할 때 사용`);
}

// 제어문
let count = 0;

if (count < 10) {
  count++;
}

test.push(count);
console.log(count);

//함수 선언문
function result([a, b]) {
  return a + b;
}

console.log(result(test));

//조건문
if (test.length === 2) {
  test.push("블록문과 제어문을 통과했습니다.");
  console.log("다음 단계로 갑시다.");
} else {
  console.log("이미 통과했습니다.");
}

let num = test.length;

let kind = num ? (num % 2 === 0 ? "짝수" : "홀수") : "없습니다.";

console.log(kind);

switch (num) {
  //test
  case 3:
    num++;

  case 4:
    console.log("4단계 입니다.");
    break;
  case 5:
    num--;
    break;
  default:
    num = 5;
}

console.log(num);

//반복문
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

while (num < 100) {
  console.log(`${num}만큼 올랐습니다!`);
  num++;
}
console.log(`${num} 도착`);

do {
  console.log(`${num}단계에 있습니다.`);
  num--;
} while (num !== 0);

console.log(`${num} 다 내려왔습니다.`);
