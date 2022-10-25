const arr = [5,9,7,10];
const divisor = 5;

function solution(arr, divisor) {
    const answer = arr.filter(x => x%divisor===0);

    if(answer.length === 0){
        return [-1];
    }else{
        return answer.sort((a,b) => a-b);
    }
}

solution(arr, divisor);