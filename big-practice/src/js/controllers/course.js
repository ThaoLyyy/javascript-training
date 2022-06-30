export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();

    this.view.bindShowCourseModal();
    this.view.bindBtnClose();
    this.view.bindAddNewCourse(this.handleAddNewCourse);
    this.view.bindCloseCourseModal();
    this.view.bindEditCourseModal(this.getCourseById);
    this.view.bindShowCourseModalDel();
    this.view.bindCloseCourseModalDel();
    this.view.bindDeleteCourse(this.handleDeleteCourse);
    this.view.bindSearchCourse(this.handleSearchCourse);
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

  handleEditCourseModal = async (data) => {
    const course = await this.model.updateCourse(data);
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

  /**
   * Use title from views call to models
   * @param {string} title
   */
  handleSearchCourse = async (title) => {
    const courses = await this.model.searchCourse(title);
    this.onCourseListChanged(this.model.courses);
  };
}
