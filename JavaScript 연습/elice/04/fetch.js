const getBtn = document.querySelector("#get-btn");
const postBtn = document.querySelector("#post-btn");

//하나의 함수로 두가지 기능을 할 수 있게

//전송하는 방식, http 통신에 있어서,
//Get Post, PUT, DELETE, PATCH
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((res) => {
    if (res.status >= 400) {
      return res.json().then((err) => {
        const error = new Error("Network Error");
        error.data = err;
        throw error;
      });
    }
    return res.json();
  });
};

const getData = () => {
  sendHttpRequest("GET", "https://reqres.in/api/users").then((result) => {
    console.log(result);
  });
};

const sendData = () => {
  sendHttpRequest("POST", "https://reqres.in/api/register", {
    email: "eve.holt@reqres.in",
    password: "pistol",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
