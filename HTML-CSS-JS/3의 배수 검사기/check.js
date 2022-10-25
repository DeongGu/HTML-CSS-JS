let num = prompt("숫자를 입력하세요.");
var result = document.querySelector('#contents');

if(num != null) {
    if(num%3 ===0) {
        result.innerHTML = num + "은 3의 배수입니다.";
    }
    else {
        result.innerHTML = num + "은 3의 배수가 아닙니다.";
    }
}
else {
    alert("입력을 취소하였습니다.");
}


// if(num != null) {
//     if(num%3 === 0){
//         document.write(num + "은 3의 배수가 맞습니다.")
//      }
//     else {
//                 document.write(num + "은 3의 배수가 아닙니다.")
//     }
// } 
// else {
//     alert("입력 하지 않았습니다.")
// }

// check();
// function check() {
//     if(num%3 ===0){
//         document.write(num + "은 3의 배수가 맞습니다.")
//     }
//     else {
//         document.write(num + "은 3의 배수가 아닙니다.")
//     }
// }