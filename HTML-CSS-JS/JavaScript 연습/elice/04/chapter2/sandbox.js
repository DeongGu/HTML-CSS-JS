const getJson = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    //   console.log(request, request.readyState);
    //정상적으로 수행이 완료 되었습니다.
    if (request.readyState === 4 && request.status === 200) {
      // 코드가 정상적으로 수행되었을때의 구간
      //   console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //코드가 오류가 났을때 실행되는 구간 . 404
      //   console.log("요청하신 내용을 찾을 수 없습니다.");
      callback("데이터를 받아 올 수 없습니다.", undefined);
    }
  });
  // request (클라이언트의 요청) response(서버의 응답)
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  //통신방법, endpoint 주소
  request.send(); // 준비됐으니, 서버로 전송을 하겠다!

  //통신..... 각 컴퓨터의 port 일종의 통신을 하기 위한 전기 콘센트 같은 느낌
  //callback. => 인자에 함수 값을 전달해 준다.
};

//asynchronous

//synchronous

// console.log(1);
// console.log(2);

//error 메시지, 결과값, 존재하지 않으면 underfined.
// getJson((err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

getJson("jsondata/pikachu.json", (err, data) => {});

// console.log(3);
// console.log(4);
