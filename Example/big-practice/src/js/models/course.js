import fetch from "../helpers/service";
import path from "../constant";

export default class coursesModel {
  constructor() {
    this.courses = [];
  }
  bindCourseListChanged(callback) {
    this.bindCourseListChanged = callback;
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
      id: id,
      image: image,
      title: title,
      author: author,
      rating: rating,
      price: price,
      buyAmount: buyAmount,
      bestSeller: true,
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
        id: id,
        image: image,
        title: title,
        author: author,
        rating: rating,
        price: price,
        buyAmount: buyAmount,
        bestSeller: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  async deleteCourse(id) {
    await fetch(`${path.PATH_COURSE}/${id}`, {
      // method: "DELETE",
    });
  }
}
