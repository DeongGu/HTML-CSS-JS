const n = 3;
const m = 12;

// const n = 2;
// const m = 5;

function solution(n, m) {
    const answer = [];
    let GCD = 1;
    for(let i = 2; i<=Math.min(n,m); i++){
        if(n%i===0 && m%i===0){
           GCD = i;
        }
    }
    answer.push(GCD);

    let LCM = n*m/GCD;

    answer.push(LCM);

    return answer;
}


function solution(n, m) {
    const answer = [];
    let GCD = (a , b) => a % b === 0 ? b : GCD(b , a % b);  

    answer.push(GCD(n,m));

    let LCM = n*m/GCD(n,m);
    
    answer.push(LCM);
    return answer;
}


//유클리드 호제법 정리
function solution(num1, num2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);
    return [gcd(num1, num2), lcm(num1, num2)];
}