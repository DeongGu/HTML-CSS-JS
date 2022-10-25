// const n = 5;
// const lost = [2,4];
// const reserve = [1,3,5];
// const n = 5;
// const lost = [2,4];
// const reserve = [3];
// const n = 3;
// const lost = [3];
// const reserve = [1];

function solution(n, lost, reserve) {
    const students = {};
     for(let i = 1; i <= n; i++){
         students[i]=1;
     }
     lost.map(x => students[x] = 0);
     reserve.map(x => students[x] +=1);

     console.log(students);
     for(let i = 1; i <= n; i++){
         if(students[i+1]===2 && students[i]=== 0){
            students[i] = 1;
            students[i+1]--;
         }else if(students[i-1]===2 && students[i]=== 0){
            students[i] = 1;
            students[i-1]--;
         }else if(students[i]===2 && students[i+1]=== 0){
             students[i]--;
             students[i+1] = 1;
         }
     }
     const answer = [];
     Object.values(students).map(x => {
         if(x >= 1){
             answer.push(x);
         }
     })

     return answer.length;

}

solution(n, lost, reserve);
