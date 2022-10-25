const numbers = [1,3,4,5,8,2,1,4,5,9,5];
const hand = "right";

// const numbers=[7,0,8,2,8,3,1,5,7,6,2];
// const hand = "left";
function solution(numbers, hand) {
   const keyPad ={
       1:[0,3],
       2:[1,3],
       3:[2,3],
       4:[0,2],
       5:[1,2],
       6:[2,2],
       7:[0,1],
       8:[1,1],
       9:[2,1],
       "*":[0,0],
        0:[1,0],
        "#":[2,0]
   }
   const result = [];
   numbers.map(x=> result.push(keyPad[x]));
   let leftHand = [0,0];
   let rightHand = [2,0];

   result.forEach((x,idx)=>{
    
       if(x[0]===1){
         let a = Math.abs((x[0] - leftHand[0])) + Math.abs((x[1] - leftHand[1]));
         let b = Math.abs((x[0] - rightHand[0])) + Math.abs((x[1] - rightHand[1]));
         if(a===b){
             if(hand === "right"){
                 rightHand = x;
                 result[idx] = "R";
             }else {
                 leftHand = x;
                 result[idx] = "L";
             }
         } else if(a>b){
             rightHand = x;
             result[idx] = "R";
         } else {
             leftHand = x;
             result[idx] = "L";
         }
       }else if(x[0]=== 2){
        rightHand = x;
        result[idx] = "R";
       }else if(x[0]=== 0){
        leftHand = x;
        result[idx] = "L";
       }
   })

   let answer = "";
   result.map(x=> answer+= x);
   return answer;
}

solution(numbers, hand);