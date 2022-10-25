let num = 6;
// const num = 16;
// const num = 626331;

function solution(num) {
    let count = 0;
    while(num !== 1){
        if(count === 500){
            return -1;
        }else if(num%2 === 0){
            count++;
            num = num/2;
        }else {
            count++;
            num=(num*3)+1;
        }
    }
    return count;
}

solution(num);