// asunc await ===> 훨씬 더 많이 사용, code 실행 컨트롤
const getPoketmons = async () => {
  //Promise 형태로 반환이 된다.****************
  //  const response = await fetch("jsondata/pikachu.json");
  const response = await fetch("jsondata/pikachuuuuuu.json");
  console.log(response);

  if (response.status !== 200) {
    throw new Error("통신 주소값을 찾을 수 없습니다.");
  }
  const data = await response.json();
  return data;
};

getPoketmons()
  .then((data) => {
    console.log("resolve :", data);
  })
  .catch((err) => console.log("rejected: ", err));
