import Model from "./models/course.js";
import View from "./views/course.js";
import Controller from "./controllers/course.js";

const model = new Model(),view = new View();
const app = new Controller(model, view);


