var superObj = {superVal:'super'}
// var subObj = {subVal:'sub'}
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

var kim = {
    name:'kim',
    first:10, second:20,
    sum:function(){return this.first+this.second}
}

// var lee = {
//     name: 'lee',
//     first:10, second:10,
//     avg:function(){
//         return (this.first+this.second)/2;
//     }
// }
// lee.__proto__ = kim;

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function(){
    return (this.first+this.second)/2;
}

console.log('lee.sum() : ', lee.sum());
console.log('lee.avg() : ', lee.avg());


//객체 생성
const jyo = {
    IQ: 120,
    score: 90,
    penalty: 10,
    plusScore: 3,
    testResult: function(){
        return this.score - this.penalty + this.plusScore;
    }
}

const jung = {
    IQ: 130,
    score: 95,
    penalty: 8,
    plusScore: 5,
}

//상속 (__proto__, Object.create())
jung.__proto__ = jyo;
const Ann = Object.create(jyo);
Ann.IQ = 140;
Ann.score = 100;
Ann.penalty = 5;
Ann.plusScore = 10;

console.log(jung.testResult());
console.log(Ann.testResult());