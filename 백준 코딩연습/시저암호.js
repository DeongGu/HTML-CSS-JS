const s = "AB";
const n = 1;

// const s = "z";
// const n = 1;

// const s = "a B z";
// const n = 4;

function solution(s, n) {
    let answer ="";
    for(let i = 0; i <s.length; i++){
        let change = s.charCodeAt(i)+n;
        if(change >122){
            change = change - 26;
        }else if(change<97&&change>90){
            change = change - 26;
        }else if(s.charCodeAt(i) === 32){
            change = 32;
        }else if(s.charCodeAt(i)>71 && s.charCodeAt(i) < 91 && change <116 && change>96){
            change = change -25;
        }
        answer+= String.fromCharCode(change);
    }
   
   return answer;
}

solution(s,n);