const s = " hello";

function solution(s) {
   let word = s.split(" ")
   let result = word.map(x => x.split(""));
   let answer = "";
    for(let i = 0; i<word.length; i++){
        for(let j = 0; j < result[i].length; j++){
            if(j%2 === 0 || j === 0){
                result[i][j] = result[i][j].toUpperCase();
                answer += result[i][j];
            }else{
                result[i][j] = result[i][j].toLowerCase();
                answer += result[i][j];
            }
        }
        if( i<word.length-1){
            answer += " ";
        }
    }
   
    return answer;
}

solution(s);