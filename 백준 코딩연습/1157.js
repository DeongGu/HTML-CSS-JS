const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim();


solution();

function solution() {
    let a = input.toUpperCase();
    let b = Array(a.length).fill(0);

    for(let i = 0; i<b.length; i++){
        for(let j = i+1; j<b.length; j++){
            if(a[i] === a[j]){
            b[i]++
            }
        }
    }

let count = 0;
for(let i = 0; i<b.length; i++){
    if(Math.max(...b) === b[i]){
        count++
    }
    
}
if(count > 1){
    console.log("?");
}else{
    console.log(a[Math.max(...b)]);
}
}