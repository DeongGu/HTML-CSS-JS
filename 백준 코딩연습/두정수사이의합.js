const a = 3;
const b = 5;
// const a , b = 3;
// const a = 5;
// const b = 3;

function solution(a, b) {
    if(a>b){
        for(let i = b+1; i<=a; i++){
            b+= i;
        }
        return b;
    }else if(a<b){
        for(let i = a+1; i<=b; i++){
            a+= i;
        }
        return a;
    }else{
        return a;
    }
}