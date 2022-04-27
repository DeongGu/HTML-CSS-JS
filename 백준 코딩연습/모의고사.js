// const answers = [1,2,3,4,5];
const answers = [1,3,2,4,2];

function solution(answers) {
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    const infinityFirst = [];
    const infinitySecond = [];
    const infinityThird = [];

    for(let i = 0; i < answers.length; i++) {
        first.map(x=> infinityFirst.push(x));    
        second.map(x=> infinitySecond.push(x));
        third.map(x=> infinityThird.push(x));
    }

    let resultFirst = infinityFirst.slice(0, answers.length).filter((x,idx)=> x=== answers[idx]);
    let resultSecond = infinitySecond.slice(0, answers.length).filter((x,idx)=> x=== answers[idx]);
    let resultThird = infinityThird.slice(0, answers.length).filter((x,idx)=> x=== answers[idx]);

    let answerFirst = resultFirst.length;
    let answerSecond = resultSecond.length;
    let answerThird = resultThird.length;

    if(answerFirst===answerSecond &&answerSecond===answerThird){
        return [1,2,3];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerFirst && answerFirst === answerSecond) {
        return [1,2];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerFirst && answerFirst === answerThird) {
        return [1,3];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerFirst) {
        return [1];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerSecond && answerSecond === answerThird){
        return [2,3];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerSecond){
        return [2];
    } else if(Math.max(answerFirst,answerSecond,answerThird)=== answerThird){
        return [3];
    }
    
}

solution(answers);




function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}