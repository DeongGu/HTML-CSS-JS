const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split(' ');


solution(input);

function solution(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i].length !== 0){
            count++
        }
    }
    console.log(count);
}


    // if(input[0] === ""){
    //     console.log(0);
    // }else{
    //     console.log(input.length);
    // }
