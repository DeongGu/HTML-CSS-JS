const s = "Zbcdefg";

function solution(s) {
  let result = s.split("");

  result.sort(function(a,b){
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
  });
    let answer = "";
    result.map(x => answer+= x);

    return answer;
}

solution(s);


function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}