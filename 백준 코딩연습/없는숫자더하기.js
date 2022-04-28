const numbers = [1,2,3,4,6,7,8,0];

function solution(numbers) {
    const criteria = [0,1,2,3,4,5,6,7,8,9];
    const answer =criteria.filter(x=> !numbers.includes(x));

    return answer.reduce((a,b) => a+b);
}

solution(numbers);