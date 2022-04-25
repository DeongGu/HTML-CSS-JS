const s = "1asad234";
console.log();
// const s = "1234";

function solution(s) {
    if(s.length === 4 || s.length === 6){
       return parseInt(s) === +s ? true:false;
    }else{
        return false;
    }
}

solution(s);