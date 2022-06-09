import fetch from "../helpers/service";
import path from "../constant";

export default class Model {
  constructor() {
    this.courses = [];
  }
  bindCourseListChanged(callback) {
    this.onCourseListChanged = callback;
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
    const item = await fetch.create(`/${path.PATH_COURSE}`, {
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller,
    });

    this.courses.push(item);

    return this.courses;
  }

  async showCourse() {
    const courseList = await fetch.get(`/${path.PATH_COURSE}`);
    return courseList;
  }

  async updateCourse({
    id,
    image,
    title,
    author,
    rating,
    price,
    bestSeller,
    buyAmount,
  }) {
    await fetch(`${path.PATH_COURSE}/${id}`, {
      method: "PUT",
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

  // async deleteCourse(id) {
  //   await fetch(`${path.PATH_COURSE}/${id}`, {
  //     // method: "DELETE",
  //   });
  // }
}
