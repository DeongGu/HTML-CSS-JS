const price = 3;
const money = 20;
const count = 4;

function solution(price, money, count) {
    if(money >= price * (count*(count+1)/2)){
        return 0;
    }else{
       return price * (count*(count+1)/2)-money;
    }
}

solution(price, money, count);