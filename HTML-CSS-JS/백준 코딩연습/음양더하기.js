const absolutes = [4, 7, 12];
const signs = [true, false, true];

function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((element,idx) => {
        if(element === true){
            answer += absolutes[idx];
        }else {
            answer -= absolutes[idx];
        }
    });
    return answer;
}