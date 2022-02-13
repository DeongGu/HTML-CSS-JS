let start = prompt("그녀와 사귀기 시작한 날짜는?", "2022-02-13");
if(start == null) {
    window.location.reload();
}

    let firstMeetDay = new Date(start);
    let currentDay = new Date();
    let result = Math.round((currentDay.getTime() - firstMeetDay.getTime())/(1000*60*60*24)) ;
    document.querySelector('#dateDay').innerHTML = result + "일";