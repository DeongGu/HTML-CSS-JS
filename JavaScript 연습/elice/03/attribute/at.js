const link = document.querySelector("a");
//element.
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://deonggu.github.io/dg-web-project");
link.innerHTML = "나의 홈페이지";

const msg = document.querySelector("p");

// msg.setAttribute("class", "success");
// msg.setAttribute("style", "color:green");

msg.classList.remove("error");
msg.classList.add("success");

//get // 가져오다. // read. 값을 읽는다
//set// 깂을 세운다. 값을 쓴다. write
