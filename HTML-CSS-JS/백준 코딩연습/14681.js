const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
let x = +input[0];
let y = +input[1];
if(x>0){
    if(y>0){
        console.log("1");
    }else{
        console.log("4");
    }
}else {
    if(y>0){
        console.log("2");
    }else {
        console.log("3");
    }
}