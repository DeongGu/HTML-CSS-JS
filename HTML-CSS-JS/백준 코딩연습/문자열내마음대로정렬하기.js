// const strings = ["sun", "bed", "car"];
// const n = 1;

const strings = ["abce","abcd","cdx"];
const n = 2;

function solution(strings, n) {
    return strings.sort(function(a,b){
        if(a[n] < b[n]) return -1;
        if(a[n] > b[n]) return 1;
        if(a[n] === b[n]){
          if(a < b) return -1;
          if(a > b) return 1;  
        }else{return -1;} 
    });
}

function solution(strings, n) {
    return strings.sort((a,b) =>{
        if(a[n] < b[n]) return -1;
        if(a[n] > b[n]) return 1;
        if(a[n] === b[n]){
          if(a < b) return -1;
          if(a > b) return 1;  
        }else{return -1;} 
    });
}

// solution(strings, n);