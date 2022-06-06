import fetch from "../helpers/service";
import path from "../constant";

export default class CourseModel {
  constructor() {
    this.courses = [];
    this.courseList = document.querySelector(".course__list");
    this.formPost = document.querySelector(".form__post");
    this.formSubmit = document.querySelector(".form__post--submit");
    this.filterInput = document.querySelector(".main-header__filter");
    let updateId = null;
  }

  async getCourse() {
    const course = await fetch.get(`/${path.PATH_COURSE}`);
    return course;
  }

  async addNewCourse(
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount
  ) {
    await fetch(PATH_COURSE, {
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

  //Edit course
  async updateCourse(
    id,
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount
  ) {
    await fetch(`${PATH_COURSE}/${id}`, {
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
}
