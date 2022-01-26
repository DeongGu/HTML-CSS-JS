function ageCalc(){
     var currentYear = prompt("올해 연도가 어떻게 됩니까?","YYYY");
     var birthYear = prompt("태어난 연도가 어떻게 됩니까?","YYYY");
     var age = currentYear - birthYear + 1;

    document.querySelector('.result').innerHTML=`당신의 나이는 ${age}세 입니다.`;
}