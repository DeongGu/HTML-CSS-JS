const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());


for (let i = 0; i < T; i++) {
    const k = +input.shift();
    const n = +input.shift();
  
    
    const apart = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
   
    for (let i = 1; i <= n; i++) {
      apart[0][i] = i;
    }
   
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        apart[i][j] = apart[i - 1][j] + apart[i][j-1];
      }
    }
  
    console.log(apart[k][n]);
  }
