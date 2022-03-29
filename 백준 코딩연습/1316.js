const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let testCaseLength = +input[0];
let testCaseArray = input.slice(1);

solution(testCaseLength,testCaseArray);

function solution(N, arr){
    let count = 0;
    
    for(let i = 0; i<N; i++){
        let word = arr[i];
        const obj ={};
        let wordC = word[0];
        obj[wordC] = true;
        let isGroupWord = true;

        for(let j = 1; j < word.length; j++){
            if(wordC !== word[j]){
                if(obj[word[j]]){
                    isGroupWord = false;
                }else{
                    wordC = word[j];
                    obj[wordC] = true;
                }
            }
        }
        if(isGroupWord){
            count++
        }
    }
    console.log(count);
}
