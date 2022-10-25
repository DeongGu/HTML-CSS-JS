const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  //정상적으로 수행이 완료 되었습니다.

  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    //코드가 오류가 났을때 실행되는 구간 . 404
    console.log("요청하신 내용을 찾을 수 없습니다.");
  }
});

// request (클라이언트의 요청) response(서버의 응답)
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//통신방법, endpoint 주소
request.send();

//통신..... 각 컴퓨터의 port 일종의 통신을 하기 위한 전기 콘센트 같은 느낌
