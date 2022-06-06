import CourseModel from "./models/course.js";
import CourseView from "./views/course.js";
import CourseController from "./controllers/course.js";

const model = new CourseModel(),
  view = new CourseView();

const app = new CourseController(model, view);


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

