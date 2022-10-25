const phone_number = "01033334444";

function solution(phone_number) {
    const result =phone_number.slice(0, phone_number.length-4);
    let star = "";
    for(let i = 0; i<result.length; i++){
        star +="*";
    }
    const answer = phone_number.replace(result,star);
    return answer;
}

solution(phone_number);