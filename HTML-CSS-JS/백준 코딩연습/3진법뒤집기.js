const n = 45;
// const n = 78413450;

function solution(n) {
    const result = [];
    while(n/3 !== 0){
        result.push(n%3);
        n= Math.floor(n/3);
    }
    let answer = 0;
    result.map((x,idx)=> answer+=x*3**(result.length-idx-1));

    return answer;
}

solution(n);