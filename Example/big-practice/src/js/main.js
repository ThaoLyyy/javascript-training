import CourseModel from "./models/course.js";
import CourseView from "./views/course.js";
import CourseController from "./controllers/course.js";

const model = new CourseModel(),view = new CourseView();
const app = new CourseController(model, view);

// json-server --watch db.json
//  http://localhost:3000/courses
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
