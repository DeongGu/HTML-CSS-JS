const s = "-1 -2 -3 -4";

function solution(s) {
  const result = s.split(" ").map((x) => +x);
  result.sort((a, b) => a - b);

  return `${result[0]} ${result[result.length - 1]}`;
}

solution(s);
