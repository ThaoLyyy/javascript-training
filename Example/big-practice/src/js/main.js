// const {image, title, author, rating...addPost.} = course;
const endpoint = "http://localhost:3456/courses";
const courseList = document.querySelector(".course__list");
const formPost = document.querySelector(".form__post");
const formSubmit = document.querySelector(".form__post--submit");
const filterInput = document.querySelector(".main-header__filter");
let updateId = null;
// 
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

filterInput.addEventListener(
  "keydown",
  debounceFn(function (e) {
    let path = endpoint;
    if (e.target.value !== "") {
      path = `${endpoint}?title_like=${e.target.value}`;
    }
    getCourses(path);
  }, 500)
);

async function addNewCourse({
  image,
  title,
  author,
  rating,
  price,
  buyAmount,
  bestSeller,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

getCourses();
// json-server --watch db.json
/**
 * Course
 * image
 * title
 * author
 * rating
 * price
 * buyAmount
 * bestSeller
 */

