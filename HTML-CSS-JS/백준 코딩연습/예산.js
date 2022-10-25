// const d = [1,3,2,5,4];//12345
// const budget = 9;
const d = [2,2,3,3];
const budget = 10;
function solution(d, budget) {
    d.sort((a,b) => a - b);
    let result = 0;
    let count = 0;
    for(let i = 0; i< d.length; i++){    
        if(result+d[i] <= budget){
            result += d[i];
            count++;
        }
    }
    return count;
}
solution(d, budget);