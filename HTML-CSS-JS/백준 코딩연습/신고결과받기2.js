let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
let k = 2;

function solution(id_list, report, k) {
    let result = {};
    let result1 = {};
    let set = new Set(report);
    let newReport = [...set];

    for(let i=0; i< id_list.length; i++){
        result[id_list[i]]=0;
        result1[id_list[i]]=0;
    }

   for(let i = 0; i < newReport.length; i++){
        for(let j = 0; j < id_list.length; j++){
            if(newReport[i].split(" ")[1] === id_list[j]){
                result[id_list[j]]++;
            }
        }
   }

   for(let i = 0; i<id_list.length; i++){
    if(result[id_list[i]] < k){
        result[id_list[i]] = 0;
   }
}
   for(let i = 0; i<id_list.length; i++){

    if(result[id_list[i]] >= k){
           let a = id_list[i];

           for(let j = 0; j<newReport.length; j++){
               if(newReport[j].split(" ")[1] === a){
                   result1[newReport[j].split(" ")[0]]++;
               }
           }
       }
    } 


    let answer = Object.values(result1);
   return answer;
}

solution(id_list, report, k);