import fetch from "../helpers/service";
import path from "../constant";

export default class Model {
  courses = [];
  constructor() {}

  bindCourseListChanged(callback) {
    this.onCourseListChanged = callback;
  }

  async showCourse() {
    this.courses = await fetch.get(`/${path.PATH_COURSE}`);
    return this.courses;
  }

  async addNewCourse(
    image,
    title,
    author,
    rating,
    price,
    buyAmount,
    bestSeller
  ) {
    const item = await fetch.create(`/${path.PATH_COURSE}`, {
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller: false,
    });
    this.courses.push(item);
    return this.courses;
  }

  // async updateCourse({
  //   id,
  //   image,
  //   title,
  //   author,
  //   rating,
  //   price,
  //   bestSeller,
  //   buyAmount,
  // }) {
  //   await fetch(`${path.PATH_COURSE}/${id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       image,
  //       title,
  //       author,
  //       rating,
  //       price,
  //       buyAmount,
  //       bestSeller,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // }

  // async deleteCourse(id) {
  //   await fetch(`${path.PATH_COURSE}/${id}`, {
  //     // method: "DELETE",
  //   });
  // }

  searchCourse = async (title) => {
    const course = await fetch.get(`/${path.PATH_COURSE}?q=${title}`);
    this.courses = course;
    return course;
  };

  filterCourse = async (title) => {
    const course = await fetch.get(`/${path.PATH_COURSE}?title=${title}`);
    this.courses = course;
    return course;
  };
}
