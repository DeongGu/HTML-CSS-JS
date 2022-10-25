const dartResult = "10D10S8D";

function solution(dartResult) {

    let number = dartResult.replace(/[^0-9]/g,'');
    let bonus = dartResult.replace(/[^S,D,T]/g,'');
    
    let first = +number[0];
    let second = +number[1];
    let third = +number[2];

    if(dartResult[0]==="1" && dartResult[1] === "0"){
        first = 10;
        second = +number[2];
        third = +number[3];
    }
    if(dartResult[2]==="1" && dartResult[3] === "0" || dartResult[3]==="1" && dartResult[4] === "0" || dartResult[4]==="1" && dartResult[5] === "0"){
        second = 10;
        third = +number[4];
    }
    if(dartResult[5]=== "1" && dartResult[6] === "0" || dartResult[6]==="1" && dartResult[7] === "0" || dartResult[7]==="1" && dartResult[8] === "0" || dartResult[8]==="1" && dartResult[9] === "0"){
        third = 10;  
    }

    if(bonus[0] === "D"){
        first = first**2;
    }else if(bonus[0] === "T"){
        first = first**3;
    }

    if(bonus[1] === "D"){
        second = second**2;
    }else if(bonus[1] === "T"){
        second = second**3;
    }

    if(bonus[2] === "D"){
        third = third**2;
    }else if(bonus[2] === "T"){
        third = third**3;
    }
   
   if(dartResult[2] === "*"){
       first = first*2;
   }else if(dartResult[2] === "#"){
       first = first*(-1);
   }

   if(dartResult[4] === "*" || dartResult[5] === "*"){
       first = first*2;
       second = second*2;
   }else if(dartResult[4] === "#" || dartResult[5] === "#"){
       second = second*(-1);
   }

   if(dartResult[6] === "*" || dartResult[7] === "*" || dartResult[8] === "*"){
        second = second*2;
        third = third*2;
   }else if(dartResult[6] === "#" || dartResult[7] === "#" || dartResult[8] === "#"){
       third = third*(-1);
   }

   return first+second+third;
}

solution(dartResult);