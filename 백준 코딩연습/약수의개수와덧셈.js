const left = 13;
const right = 17;

function solution(left, right) {
    let answer = 0;

    for(let i = left; i <=right; i++){
        const result = [];
        for(let j = 1; j <= i; j++){
            if(i%j === 0){
                result.push(j);
            }
        } 
        if(result.length%2===0){
            answer+=i;
        }else{
            answer-=i;
        }
    }
    return answer;
}


function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
solution(left,right);