const N = 5;
const stages = [2,1,2,6,2,4,3,3];



function solution(N, stages) {
    const result = {};
    for(let i = 1; i<=N; i++){
        result[i] = (stages.filter(x=> x === i).length)/(stages.length - (stages.filter(x=> x <= i-1).length));
    }

    let NaN_answer = Object.keys(result).sort(function(a,b){return result[b]-result[a]})
    let answer = NaN_answer.map(x=> +x);

    return answer;
}


// 정리된 다른 사람 풀이 (논리는 같음)
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

solution(N,stages);