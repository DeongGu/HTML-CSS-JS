const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const testCaseLength = +input[0];

solution(testCaseLength);

function solution(length){
    for(let i = 1; i <= testCaseLength; i++){
        let testCase = input[i].split(' ');
        let H = testCase[0];
        let N = testCase[2];
        
        let roomNum = Math.ceil(N/H);
        let roomFloor = N%H;
        if(roomFloor === 0){
            roomFloor = H;
        }
        if(roomNum < 10){
            console.log(`${roomFloor}0${roomNum}`);
        }else{
            console.log(`${roomFloor}${roomNum}`);
        }
    }
}