function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
}

Person.prototype.sum=function(){
    return 'prototype : '+(this.first+this.second+this.third);
}

var kim = new Person('kim', 10, 20, 30);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
var lee = new Person('lee', 10, 10, 10);
    
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());


function PersonInformation(IQ, hobby, favoriteColor, weight, height, e_mail, score, penalty){
    this.IQ = IQ,
    this.hobby = hobby,
    this.favoriteColor = favoriteColor,
    this.weight = weight,
    this.height = height,
    this.e_mail = e_mail,
    this.score = score,
    this.penalty = penalty
}

//생성자함수 내의 메소드 단점 보완 (공통으로 사용되는 함수)
//프로토타입
PersonInformation.prototype.testresult = function(){
    return this.score - this.penalty;
}
const devil = new PersonInformation(300,'trouble','red','none','none','devil@hell.devil',80,0);
console.log(devil);
console.log(devil.testresult());
