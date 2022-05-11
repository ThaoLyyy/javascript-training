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
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
const promise2 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});
const promise3 = new Promise((resolve, reject) => {
  httpGetAsync("https://picsum.photos/200/300", resolve);
});

//async - await
const executeAsync = async () => {
  try {
    const response = await currentPromise;
    //   console.log({response});
    document.getElementById("img_1").setAttribute("src", response.responseURL);
  
    const response2 = await promise2;
    //   console.log({response2});
    document.getElementById("img_2").setAttribute("src", response2.responseURL);
    const response3 = await promise3;
    //   console.log({response3});
    document.getElementById("img_3").setAttribute("src", response3.responseURL);
  } catch (error) {
      console.log(error);
  }
};
executeAsync();

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
