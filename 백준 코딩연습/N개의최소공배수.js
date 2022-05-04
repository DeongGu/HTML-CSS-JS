// const arr = [2,6,8,14];
// const arr=[3,4,9,16];
// const arr = [2,3,4];
// const arr = [2,7,14];
// const arr = [3,4,9,16];
// const arr = [5,10,15,20,25];
// const arr = [1,10,100,1000,5000,3,9999];
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const arr = [1, 45000];
// const arr = [6,10];
// const arr = [13, 17];
// const arr = [3];
// const arr = [121, 199];
// const arr = [24, 18];
// const arr = [33, 22, 9 , 10];
// const arr = [2,3,2,3,3,3,3,3,3,3,3,3,36,3,3,4,2];
// const arr = [14, 2, 7];
const arr = [97,89,83,87,10,88,98,94,91,90];


function solution(arr) {
    let gcd = (a, b) => a%b===0 ? b : gcd(b, a%b);
    return arr.reduce((a, b) => a * b / gcd(a, b));
}

function solution(arr) {
    return arr.reduce((a, b) =>{
        return a * b / getGCD(a, b);
    })
}
function getGCD(a, b){
    if(a % b == 0) return b;
    return getGCD(b, a % b);
}


// 수정필요함. 예외 케이스
// function solution(arr) {
//     let GCD = 1;
//     let LCM = arr[0];
//     arr.sort((a,b) => b-a);

//     while(arr.length !== 1){

//         if(arr[0] === 1){
//             arr.shift();
//             if(arr.length === 1){
//                 LCM = arr[0];
//                 break;
//             }
//         }
//         if(arr[0]===arr[1] && arr.length === 2){
//             LCM = arr[1];
//             break;
//         }
//         for(let i = 2; i<=Math.min(arr[0],arr[1]); i++){
//             if(arr[0]===arr[1]){
//                 arr.shift();
//             }
//             if(arr[0]%i === 0 && arr[1]%i=== 0){
//                 GCD = i;
//             }
//         }
//             LCM = arr[0]*arr[1]/GCD;
//             arr.shift();
//             arr[0] = LCM;
//             arr.sort((a,b) => b-a);
        
//     }
//     return LCM;
// }

solution(arr);
