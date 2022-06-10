export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindCourseListChanged(this.onCourseListChanged);
    this.view.bindAddNewCourse(this.handleAddNewCourse);
    this.init();
  }

  init = async () => {
    const courses = await this.model.showCourse();
    this.view.display(courses);
  };

  onCourseListChanged = (courses) => {
    this.view.display(courses);
  };
  handleAddNewCourse = ( image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller,) => {
    this.model.addNewCourse( image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller,);
  };
}
