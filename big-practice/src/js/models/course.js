import fetch from "../helpers/service";
import path from "../constant";

export default class Model {
  courses = [];
  constructor() {}

  /**
   * Use API url from fetch import in read data
   * @returns {array} course.
   */
   getCourses = async () => {
    this.courses = await fetch.get(`/${path.PATH_COURSE}`);
    return this.courses;
  };

  // getCourses = async () => {
  //   this.courses = await fetch.get(`/${path.PATH_COURSE}`);
  //   const wrapper = document.getElementsByClassName("course__list");
  //     wrapper[0].innerHTML = "";
  //     if (courses.length > 0 && Array.isArray(courses)) {
  //       courses.forEach((course) => displayCourses(course));
  //     }
  //   return this.courses;
  // };


  /**
   *
   * @param {string} id
   * @param {string} image
   * @param {string} title
   * @param {string} author
   * @param {number} rating
   * @param {number} price
   * @param {number} buyAmount
   * @param {string} bestSeller
   */
  // course = {
  //   image,
  //   title,
  //   author,
  //   rating,
  //   price,
  //   buyAmount,
  //   bestSeller
  //  }
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
      bestSeller: "BestSeller",
    });
    console.log("model course", course);
    this.courses.push(course);
    return this.course;
  };

  /**
   * Use API url from fetch import and param id from controller in update
   * @param {string} id
   * @param {string} updateImg
   */
  updateCourse = async (
    id,
    updateImg,
    updateTitle,
    updateAuthor,
    updateRating,
    updatePrice,
    updateBuyAmount,
    updateBestSeller
  ) => {
    const index = this.courses.findIndex((course) => course.id === id);
    const courseUpdate = {
      id,
      image: updateImg,
      title: updateTitle,
      author: updateAuthor,
      rating: updateRating,
      price: updatePrice,
      buyAmount: updateBuyAmount,
      bestSeller: updateBestSeller,
    };

    await fetch.update(`/${path.PATH_COURSE}/${id}`, courseUpdate);
    this.courses.splice(index, 1, courseUpdate);
    return this.courses;
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

  deleteCourse = async (id) => {
    const index = this.courses.findIndex(course => course.id === id)
    const course = this.courses[index]
    await fetch.remove(`/${path.PATH_COURSE}/${id}`, course)
    this.courses.splice(index, 1)
    return this.courses
  };
  
   getCourseById = (id) => {
        const index = this.courses.find((course) => course.id === id);
        const course = this.courses[index];
    };

  /**
   * Search all course that match
   * @returns {array} course
   */
  searchCourse = async (title) => {
    const course = await fetch.get(`/${path.PATH_COURSE}?q=${title}`);
    this.courses = course;
    return course;
  };

  /**
   * Filter all course that match
   * @returns {array}
   */
  filterCourse = async (title) => {
    const course = await fetch.get(`/${path.PATH_COURSE}?title=${title}`);
    this.courses = course;
    return course;
  };
}
