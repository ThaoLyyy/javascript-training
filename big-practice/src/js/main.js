import Model from "./models/course.js";
import Controller from "./controllers/course.js";
import View from "./views/course.js";

const controller = new Controller(new Model(), new View());

