var count = 0;
var quizNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector('#clickCount').innerHTML=count+"회";

function refresh() {
    let answerNumber = prompt("1~100의 숫자를 입력하세요.");

    if(answerNumber===null || answerNumber < 1 || answerNumber >100 ){
        alert("1~100사이의 숫자를 입력하세요!!!!");
        count++
        document.querySelector('#clickCount').innerHTML=count+"회";
        
    }
    else if(quizNumber > answerNumber) {
        document.querySelector('#result').innerHTML="UP!";
        count++;
        document.querySelector('#clickCount').innerHTML=count+"회";
        
    } 
    else if(quizNumber < answerNumber) {
        document.querySelector('#result').innerHTML="DOWN!";
        count++;
        document.querySelector('#clickCount').innerHTML=count+"회";
        
    }
    else {
        document.querySelector('#result').innerHTML="맞혔습니다!!";
        count++
        document.querySelector('#clickCount').innerHTML=count+"회";
    }
}