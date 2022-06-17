export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddNewCourse(this.handleAddNewCourse);
    this.view.bindFilterCourse(this.handleFilterCourse);
    this.view.bindUpdateCourse(this.handleUpdateCourse);
    this.view.bindDeleteCourse(this.handleDeleteCourse);

    this.init();
  }
  init = async () => {
    await this.model.getCourses();
    this.onCourseListChanged(this.model.courses);
  };

  onCourseListChanged = (courses) => {
    this.view.displayCourses(courses);
  };

  handleAddNewCourse = async (
    image,
    title,
    author,
    rating,
    price,
    buyAmount,
    bestSeller
  ) => {
    const course = await this.model.addNewCourse(
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller
    );
    this.onCourseListChanged(this.model.courses);
  };

  handleUpdateCourse = async (
    image,
    title,
    author,
    rating,
    price,
    buyAmount,
    bestSeller
  ) => {
    const course = await this.model.updateCourse(
      image,
      title,
      author,
      rating,
      price,
      buyAmount,
      bestSeller
    );
    this.onCourseListChanged(this.model.courses);
  };

   /**
    * Use id from views call to models 
    * @param {string} id 
    */
    handleDeleteCourse = async id => {
    const courses = await this.model.deleteCourse(id);
    this.view.displayCourses(courses);
}
  
  handleSearchCourse = async (title) => {
    const courses = await this.model.searchCourse(title);
    this.view.displayCourses(courses);
  };

  handleFilterCourse = async (title) => {
    const courses = await this.model.filterCourse(title);
    this.view.displayCourses(courses);
  };
}
