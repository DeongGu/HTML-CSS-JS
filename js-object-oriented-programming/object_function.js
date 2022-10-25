// var kim = {name:'kim', first:10, second:20}
// var lee = {name:'lee', first:10, second:10}
// function sum(prefix){
//     return prefix+(this.first+this.second);
// }
// // sum();
// console.log("sum.call(kim)", sum.call(kim,'=> ')); //apply
// console.log("lee.call(lee)", sum.call(lee,': '));
// var kimSum = sum.bind(kim, '-> ');
// console.log('kimSum()', kimSum());


const woo = {codeName: 'MM', point: 200, cash: 3000}
const shin = {codeName: 'DG', point: 100, cash: 2000}
function sum(prefix) {
    return prefix + (this.point +this.cash);
}
//call() 함수
// 실행할 때 마다 어떤 함수의 this 값을 바꾸는, context를 바꾸는 함수
// sum();
console.log(sum.call(woo, '=>'));//3200
console.log(sum.call(shin,": "));//2100

//bind() 함수
//bind는 호출한 함수를 변경하는 것이 아니라 인자로 받은 조건을 만족하는 새로운 함수를 리턴
const wooS = sum.bind(woo, '-> ');
console.log(wooS());
