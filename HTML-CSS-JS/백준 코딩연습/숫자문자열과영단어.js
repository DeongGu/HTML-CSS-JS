const s = "one4seveneighteight";

function solution(s) {
    let answer = s;
    const englishCardArray = ["zero", "one","two","three","four","five","six","seven","eight","nine"];

    while(isNaN(+answer)){
        for(let i = 0; i<englishCardArray.length; i++){
            answer = answer.replace(englishCardArray[i], i);
        }
    }

    return +answer;
}

solution(s);