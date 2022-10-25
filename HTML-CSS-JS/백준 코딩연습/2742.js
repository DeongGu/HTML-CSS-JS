let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().trim();
let N = ''
for(let i = 0; i < input; i++) {
    N += input - i +"\n";
}
console.log(N);