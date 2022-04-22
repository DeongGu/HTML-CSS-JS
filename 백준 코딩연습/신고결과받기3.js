function solution(id_list, report, k) {
    let newReport = [...new Set(report)];
    const result ={};
    const reported = {};
    const banList = [];
    id_list.map(rep => result[rep] = 0);
    const arrReport = newReport.map(rep => rep.split(" "));
    arrReport.map(rep => {
        if(!reported[rep[1]]){
            reported[rep[1]] = 1           
        } else if (reported[rep[1]]) {
            reported[rep[1]] += 1            
        }    
    });
    Object.keys(reported).map(key => {
        if(reported[key] >= k) {           
            banList.push(key);              
        }
    })
    arrReport.map(rep => {
        if(banList.includes(rep[1])){     
            result[rep[0]] += 1
        }
    })
   return Object.values(result);
   
}

solution(id_list, report, k);