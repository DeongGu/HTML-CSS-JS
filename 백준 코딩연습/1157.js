const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();


solution();

function solution() {
    let str = {};
    for(let i =0; i<input.length; i++){
        if(str[input[i].toUpperCase()] === undefined ){
            str[input[i].toUpperCase()] = 1;
        }else{
            str[input[i].toUpperCase()]++
        };
    }
    
    let maxCount = 0;
    let maxStr = "";
    let isOneMore = false;

    for(const a in str){
        if(str[a] > maxCount){
            maxCount = str[a];
            maxStr = a;
            isOneMore = false;
        }else if(str[a] === maxCount){
            isOneMore = true;
        }
    }

    if(isOneMore){
        console.log('?');
    }else{
        console.log(maxStr);
    }
}


// function solution() {
//     let a = input.toUpperCase();
//     let b = Array(a.length).fill(0);

//     for(let i = 0; i<b.length; i++){
//         for(let j = i+1; j<b.length; j++){
//             if(a[i] === a[j]){
//             b[i]++
//             }
//         }
//     }

// let count = 0;
// for(let i = 0; i<b.length; i++){
//     if(Math.max(...b) === b[i]){
//         count++
//     }
    
// }
// if(count > 1){
//     console.log("?");
// }else{
//     console.log(a[Math.max(...b)]);
// }
// }