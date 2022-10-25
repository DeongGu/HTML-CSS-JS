const arr = [4,3,2,1];

// const arr = [10];

function solution(arr) {
    let answer = arr.filter(function(data){
        if(arr.length ===1){
            return [-1];
        }
        return data > Math.min(...arr);
    });
    return answer;
}

solution(arr);



function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}