const getJson = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // callback(undefined, request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // callback("데이터를 받아 올 수 없습니다.", undefined);
        reject("실패");
      }
    });
    //endpoint api
    request.open("GET", resource);
    request.send();
  });
};

getJson("jsondata/pikachu.json")
  .then((result) => {
    console.log("promise 1: " + result);
    return getJson("jsondata/musclemon.json");
  })
  .then((result) => {
    console.log("promise 2: " + result);
    return getJson("jsondata/jamanbo.json");
  })
  .then((result) => {
    console.log("promise 3: " + result);
  })
  .catch((err) => {
    console.log("rejected " + err);
  });

//call back 지옥의 형태 ==> Promise, Async/Await
// getJson("jsondata/pikachu.json", (err, data) => {
//   console.log(data);
//   getJson("jsondata/musclemon.json", (err, data) => {
//     console.log(data);
//     getJson("jsondata/jamanbo.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });
