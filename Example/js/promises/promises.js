// promises: các đối tượng js để thực hiện các tác vụ bất đồng bộ
//Brow API/Web API
// - setTimeout(), setInterval(),..
// - Click, scroll,... events

//
// const currentTime = new Promise((resolve, reject) => {
//     let condition = true;

//     setTimeout(() => {
//         resolve ('Success');
//      }, 3000);
// });

// promise
function httpGetAsync(theUrl, resolve) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); //true for asynchronous
  xmlHttp.send(null);
}
//   const currentPromise1 = new Promise1((resolve, reject) => {
//       httpGetAsync('https://picsum.photos/200/300', resolve)
//   });
//   -------
const currentPromise = new Promise((resolve, reject) => {
  //   let condition = true;
  //   let condition = false;

  //   if (condition) {
  //     //request API
  //     setTimeout(() => {
  //       resolve("Success 123");
  //     }, 3000);
  //   } else {
  //     reject("Error");
  //   }

  httpGetAsync("https://picsum.photos/200/300", resolve);
});
const promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
const promise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

//chaining: .then(data => {})
currentPromise
  .then((data) => {
    console.log(data);
    document.getElementById("img_1").setAttribute("src", data.responseURL);
    return promise2;
  })
  .then((data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);
    return promise3;
  })
  .then((data) => {
    document.getElementById("img_3").setAttribute("src", data.responseURL);
  })
  .catch((err) => {
    console.log(err);
  });
