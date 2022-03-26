function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
    
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

//객체 생성
const shin ={
    IQ: 140,
    hobby: 'badminton',
    favoriteColor: 'green',
    weight: '63kg',
    height: '163cm',
    e_mail: 'asdfgg77@naver.com',
    score: 100,
    penalty: 20,
    testresult: function(){
        return this.score - this.penalty;
    } 
}

const god = {
    IQ: 200,
    hobby: 'sacrifice',
    favoriteColor: 'white',
    weight: 'none',
    height: 'none',
    e_mail: 'god@heaven.god',
    score: 100,
    penalty: 20,
    testresult: function(){
        return this.score - this.penalty;
    }
}

//생성자함수 생성
function personInformation(IQ, hobby, favoriteColor, weight, height, e_mail, score, penalty){
    this.IQ = IQ,
    this.hobby = hobby,
    this.favoriteColor = favoriteColor,
    this.weight = weight,
    this.height = height,
    this.e_mail = e_mail,
    this.score = score,
    this.penalty = penalty,
    this.testresult = function(){
        return this.score - this.penalty;
    }
}
//인스턴스 생성
const devil = new personInformation(300,'trouble','red','none','none','devil@hell.devil',80,0);
console.log(devil);
console.log(devil.testresult());