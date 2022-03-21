const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
let a = [];
let b = [];
for(let i = 1; i < input.length; i++){
    a[i-1] = input[i];
}

for(let i =0;i<a.length;i++){
   b[i] = a[i].split('X');
}

let filtered = b.filter(function(value){
    return value !== '';
})
console.log(filtered);