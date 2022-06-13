export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindCourseListChanged(this.onCourseListChanged);
    this.view.bindAddNewCourse(this.handleAddNewCourse);
    // this.view.bindDeleteCourse(this.handleDeleteCourse);
    // this.onCourseListChanged(this.model.showCourse);
    this.view.bindFilterCourse(this.handleFilterCourse);

    this.init();
    // init();
  }

  init = async () => {
    const courses = await this.model.showCourse();
    this.view.display(courses);
    return courses;
  };

  onCourseListChanged = (courses) => {
    this.view.display(courses);
  };
  handleAddNewCourse = (
    image,
    title,
    author,
    rating,
    price,
    buyAmount,
    bestSeller
  ) => {
    this.model.addNewCourse(
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller
    );
  };

  // handleDeleteCourse = async (id) => {
  //   const courses = await this.model.deleteCourse(id);
  //   this.view.display(courses);
  // };
  handleSearchCourse = async title => {
    const courses = await this.model.searchCourse(title)
    this.view.display(courses)
  }

  handleFilterCourse = async title =>{
    const courses = await this.model.filterCourse(title)
    this.view.display(courses)
  }
}
