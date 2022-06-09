export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init = async () => {
    const courses = await this.model.showCourse();
    this.view.display(courses);
  };

  onCourseListChanged = (courses) => {
    this.view.display(courses);
  };
}
