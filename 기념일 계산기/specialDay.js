var start = prompt("그녀와 사귀기 시작한 날짜는?", "2022-02-13");
if(start == null) {
    window.location.reload();
}
var firstMeetDay = new Date(start);
var currentDay = new Date();
var result = Math.round((currentDay.getTime() - firstMeetDay.getTime())/(1000*60*60*24));
    document.querySelector('#dateDay').innerHTML = result + "일";    
    
    dayCalc(100);
    dayCalc(200);
    dayCalc(365);
    dayCalc(500);

function dayCalc(days) {
    
    var test = firstMeetDay.getTime()+(days * 1000 * 60 * 60 *24);
    var calcResult = new Date(test);
    var year = calcResult.getFullYear();
    var month = calcResult.getMonth();
    var date = calcResult.getDate();
    document.querySelector("#result"+ days).innerHTML = year + "년 " + month + "월 " + date + "일";
}