const numbers = [2, 1, 3, 4, 1];
// const numbers = [5, 0, 2, 7];

function solution(numbers) {
    const result = [];
    for(let i = 0; i <numbers.length; i++){
        for(let j = i+1; j < numbers.length; j ++){
            result.push(numbers[i]+numbers[j]);
        }
    }
    const set = new Set(result);
    const answer = [...set].sort((a,b)=>a-b);
    return answer;
}

solution(numbers);