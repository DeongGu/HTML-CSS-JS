const s = "3people unFollowed me";

function solution(s) {
  const result = s.split(" ");

  let answer = result
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");

  return answer;
}

solution(s);
