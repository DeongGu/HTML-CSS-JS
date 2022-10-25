let sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
function solution(sizes) {
    let big=[];
    let small=[];
    
    for(let i = 0; i < sizes.length; i++){
        big.push(Math.max(...sizes[i]));
        small.push(Math.min(...sizes[i]));
    }

    let resultBig=Math.max(...big);
    let resultSmall = Math.max(...small);
    let answer = resultBig * resultSmall;
    return answer;
}

console.log(solution(sizes));