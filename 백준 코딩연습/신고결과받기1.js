let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let k = 2;

function solution(id_list, report, k) {
    let result = new Array(id_list.length).fill(0);
    let result1 = new Array(id_list.length).fill(0);
    let set = new Set(report);
    let newReport = [...set];
    let reportCount = [];
   for(let i = 0; i < newReport.length; i++){
       reportCount.push(newReport[i].split(" ")[1]); 
   }

   for(let i = 0; i < reportCount.length; i++){
        for(let j = 0; j < id_list.length; j++){
            if(reportCount[i] === id_list[j]){
                result[j]++;
            }
        }
   }
   

   for(let i = 0; i<id_list.length; i++){
    if(result[i] < k){
        result[i] = 0;
   }
}

   for(let i = 0; i<id_list.length; i++){

    if(result[i] >= k){
           let a = id_list[i];

           for(let j = 0; j<newReport.length; j++){
               if(newReport[j].split(" ")[1] === a){
                   let index = id_list.indexOf(`${newReport[j].split(" ")[0]}`,0);
                    result1[index]++
               }
           }
       }
    } 

   return result1;
}

solution(id_list, report, k);