const arr = [1,1,3,3,0,1,1];

function solution(arr){
  const answer =arr.filter( (x,idx) => x !== arr[idx+1]);
   return answer;
}

solution(arr);