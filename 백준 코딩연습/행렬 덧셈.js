const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

// const arr1 = [[1],[2]];
// const arr2 = [[3],[4]];

function solution(arr1, arr2) {
    const answer = [];
    
    for(let i = 0; i<arr1.length; i++){
        const result = [];
        for(let j = 0; j<arr1.length; j++){
            result.push(arr1[i][j] + arr2[i][j]);    
        }
        answer.push(result);
    }
    return answer;
}