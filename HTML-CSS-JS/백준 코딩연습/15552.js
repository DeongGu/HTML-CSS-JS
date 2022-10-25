let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")
let result = ''
for(let i = 1; i <= input[0]; i++) {
    let A = input[i].split(' ')
    result += parseInt(A[0]) + parseInt(A[1]) + "\n"
}
console.log(result);