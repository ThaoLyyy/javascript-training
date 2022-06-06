import fetch from "../service.js";
import path from "../constant.js";

export default class coursesModel {
  constructor() {
    this.courses = [];
  }
}
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
  bestSeller,
  buyAmount,
}) {
  await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function updateCourse({
  id,
  image,
  title,
  author,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  await fetch(`${endpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

async function deleteCourse(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}
async function getSingleCourse(id) {
  const response = await fetch(`${endpoint}/${id}`);
  const data = await response.json();
  return data;
}
function renderItem(item) {
  const template = `<div class="course__item">
  <div class="course__image">
    <img src="${item.image}" alt="" />
    <button class="course-edit" data-id="${
      item.id
    }"><i class="fa fa-pencil" style="pointer-events: none;"></i></button>
    <button class="course-remove" data-id="${
      item.id
    }"><i class="fa fa-times"></i></button>
  </div>
  <div class="course__content">
    <h3 class="course__title">
      ${item.title}
    </h3>
    <div class="course__author">${item.author}</div>
    <div class="course__meta">
      <div class="course__rating">${item.rating}</div>
    </div>
    ${
      item.bestSeller ? '<div class="course__best-seller">Best seller</div>' : ""
    }
  </div>
  <div class="course__enroll">${item.buyAmount}</div>
  `;
  courseList.insertAdjacentHTML("beforeend", template);
}
getCourses();
