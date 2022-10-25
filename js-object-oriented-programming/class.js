// class Person{
//     constructor(name, first, second, third){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//         this.third = third;
//     }
//     sum(){
//         return this.first+this.second+this.third;
//     }
// }

// class PersonPlus extends Person {
//     constructor(name, first, second, third, fourth){
//         super(name, first, second, third);
//         this.fourth = fourth;
//     }
//     sum(){
//         return super.sum() + this.fourth;
//     }
//     avg(){
//         return (this.first+this.second+this.third+this.fourth)/4;
//     }
// }
// var kim = new PersonPlus('kim', 10, 20, 30, 40);

// console.log("kim.sum()", kim.sum());
// console.log("kim.avg()", kim.avg());

class PersonInformation{
    constructor(IQ, hobby, favoriteColor, weight, height, e_mail, score, penalty){
        this.IQ = IQ;
        this.hobby = hobby;
        this.favoriteColor = favoriteColor;
        this.weight = weight;
        this.height = height;
        this.e_mail = e_mail;
        this.score = score;
        this.penalty = penalty;
    }
    testresult(){
        return this.score - this.penalty;
    }
}

class PersonInformationPlus extends PersonInformation{
    constructor(IQ, hobby, favoriteColor, weight, height, e_mail, score, penalty, plusScore){
    super(IQ, hobby, favoriteColor, weight, height, e_mail, score, penalty);
    this.plusScore = plusScore;
    }
    testresult() {return super.testresult() + this.plusScore }
    e_mailId() {return this.e_mail.split('@')[0]}
}
const devil = new PersonInformationPlus(300,'trouble','red','none','none','devil@hell.devil',80,0,5);
console.log(devil);
console.log('devil.testresult : ', devil.testresult());
console.log(devil.e_mailId());