const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arrayLength = +input[0];
const inputArray = [];

for(let i = 1; i<=arrayLength; i++){
    const arr = input[i].split(' ');
    inputArray.push({
        N: +arr[0],
        case: arr.slice(1).map((item)=>+item)
    }); 
}

solution(arrayLength, inputArray);

function solution(C, inputArray){
    for(let i = 0; i< C; i++){
        const item = inputArray[i];
        let avg = 0;
            for(let j = 0; j <item.N; j++){
                avg += item.case[j];
            }
        avg /= item.N;
        let count = 0;
            for(let i = 0; i<item.N; i++){
                if(avg < item.case[i]){
                    count++
                }
            }
            let result = count/item.N;
            console.log((result * 100).toFixed(3) +'%');

    }
}