import fetch from "../helpers/service";
import path from "../constant";
import { v4 as uuidv4 } from "uuid";

export default class Model {
  constructor() {
    this.courses = [];
  }

  /**
   * Use API url from fetch import in read data
   * @returns {array} course.
   */
  getCourses = async () => {
    this.courses = await fetch.get(`/${path.PATH_COURSE}`);
    return this.courses;
  };

  getCourseById = async () => {
    return this.course.find((item) => item.id === id);
  };

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
  addNewCourse = async (data) => {
    const dataParam = {
      id: uuidv4(),
      image: data.image,
      title: data.title,
      author: data.author,
      rating: data.rating,
      price: data.price,
      buyAmount: data.buyAmount,
      bestSeller: data.bestSeller,
    };
    const course = await fetch.create(`/${path.PATH_COURSE}`, dataParam);
    this.courses.push(course);
    return course;
  };

  /**
   * Use API url from fetch import and param id from controller in update
   * @param {string} id
   */
  updateCourse = async (data) => {
    const dataParam = {
      // id: uuidv4(),
      image: data.image,
      title: data.title,
      author: data.author,
      rating: data.rating,
      price: data.price,
      buyAmount: data.buyAmount,
      bestSeller: data.bestSeller,
    };
    const course = await fetch.update(`/${path.PATH_COURSE}`, dataParam);
    const index = this.courses.findIndex((course) => course.id === id);
    this.courses.slice(index, 1, course);
    return course;
  };

  deleteCourse = async (id) => {
    const course = await fetch.remove(`/${path.PATH_COURSE}/${id}`);
    const index = this.courses.findIndex((course) => course.id === id);
    this.courses.splice(index, 1);
    return course;
  };

  /**
   * Search all course that match
   * @returns {array} course
   */
  searchCourse = async (querySearch) => {
    if (querySearch) {
      return this.courses.filter((item) => item.title.includes(querySearch));
    }
  };
}
