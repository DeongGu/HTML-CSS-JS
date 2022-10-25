const arr = [1,2,3,4];

function solution(arr) {
    let arrSum = 0;
    for(let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }
    const answer = arrSum/arr.length;
    return answer;
}

function average(arr){
    return array.reduce((a, b) => a + b) / array.length;
  }