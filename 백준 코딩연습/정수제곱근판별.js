const n = 121;
// const n = 3;

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) !== undefined ? (Math.sqrt(n)+1)**2 : -1;
}