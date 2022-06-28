export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();

    this.view.bindShowCourseModal();
    this.view.bindAddNewCourse(this.handleAddNewCourse);
    this.view.bindBtnClose();
    this.view.bindCloseCourseModal();
    this.view.binEditCourseModal(this.getCourseById);
    this.view.bindDeleteCourse(this.handleDeleteCourse);
  }

  init = async () => {
    await this.model.getCourses();
    this.onCourseListChanged(this.model.courses);
  };

  onCourseListChanged = (courses) => {
    this.view.displayCourses(courses);
  };

  getCourseById = (id) => {
    return this.model.getCourseById(id);
  };

  handleAddNewCourse = async (data) => {
    const course = await this.model.addNewCourse(data);
    this.onCourseListChanged(this.model.courses);
  };

  /**
   * Use id from views call to models
   * @param {string} id
   */
  handleDeleteCourse = async (id) => {
    const courses = await this.model.deleteCourse(id);
    this.onCourseListChanged(this.model.courses);
  };

}
