const x = 10;
// const x = 12;
// const x = 11;
// const x = 13;

function solution(x) {
    const input = x.toString().split("");
    let result =0;

    input.map(x => result += +x);
    
    if(x%result === 0){
        return true;
    }else {
        return false;
    }
}

solution(x);