const s = "pPoooyY";

// const s = "Pyy";

function solution(s){
    const input = s.toLowerCase();
  let countP = input.split('p').length - 1;
  let countY = input.split('y').length - 1;
  if(countP === countY){
      return true;
  }else if(countP === countY === 0){
      return true;
  }else{
      return false;
  }
}

solution(s);