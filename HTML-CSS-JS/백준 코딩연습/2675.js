const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input[0];
const testCaseArray = [];

for(let i = 1; i<=T; i++){
    const testCase = input[i];
    const testCaseRS =testCase.split(' ');
    testCaseArray.push({R: +testCaseRS[0],
    S: testCaseRS[1] });
}

solution(T);

function solution(T) {
   
    for(let i = 0; i < T; i++){
        let {R , S} = testCaseArray[i];
        let P = '';
        for(let j = 0; j < S.length; j++){
        
            for(let k = 0; k < R; k++){
                P += S[j];
            }
        }
        console.log(P)    
    }
}