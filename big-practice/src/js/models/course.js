import fetch from "../helpers/service";
import path from "../constant";

export default class Model {
  constructor() {
    courses = [];
  }

  getCourses = async () => {
    this.courses = await fetch.get(`/${path.PATH_COURSE}`);
    return this.courses;
  };

  addNewCourse = async (
    image,
    title,
    author,
    rating,
    price,
    buyAmount,
    bestSeller
  ) => {
    const course = await fetch.create(`/${path.PATH_COURSE}`, {
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller: false,
    });
    // console.log("model course", course);
    this.courses.push(course);
    return course;
  };

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

  // deleteCourse = async (id) => {
  //   const index = this.courses.findIndex((item) => item.id === id);
  //   const course = this.courses[index];
  //   this.courses.splice(index, 1);
  //   await fetch.remove(`/${path.PATH_COURSE}/${id}`, course);
  //   return this.courses;
  // };

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
