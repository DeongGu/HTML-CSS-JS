var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}
// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum());


const shin = {
    name: 'shin',
    IQ: 140,
    score: 100,
    penalty: 20,
    sum: function(){
       return this.score-this.penalty;
    }
}

console.log(shin.sum());