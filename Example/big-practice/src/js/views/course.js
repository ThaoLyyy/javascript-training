export default class CourseModel {
  constructor() {
    this.courses = [];
    this.courseList = document.getElementById("course__list");
    this.formPost = document.getElementById("form__post");
    this.formSubmit = document.getElementById("form__post--submit");
    this.filterInput = document.getElementById("main-header__filter");
    let updateId = null;
  }

  display(allCourses) {
    allCourses().then((course) => {
      if (course.length !== 0) {
        course.forEach((course) => {
          const item = document.createElement("div");
          item.id = course.id;
          item.className = "course__list";
        });
      }
    });
  }

  // async function getSingleCourse(id) {
  //   const response = await fetch(`${path.PATH_COURSE}/${id}`);
  //   const data = await response.json();
  //   return data;
  // }

  bindAddNewCourse(handleAddNewCourse) {
    formPost.addEventListener("submit", async (e) => {
      e.preventDefault();
      const course = {
        title: this.elements["title"].value,
        author: this.elements["author"].value,
        rating: +this.elements["rating"].value,
        price: +this.elements["price"].value,
        image: this.elements["image"].value,
        bestSeller: this.elements["bestSeller"].checked,
        buyAmount: +this.elements["buyAmount"].value,
      };
      console.log(updateId);
      updateId
        ? await updateCourse({ id: updateId, ...course })
        : await addNewCourse(course);
      this.reset();
      await getCourses();
      updateId = null;
      formSubmit.textContent = "Add course";
      handleAddNewCourse(...course);
    });
  }
  bindAddTask(handleAddTask) {
    courseList.addEventListener("click", async (e) => {
      if (e.target.matches(".course__remove")) {
        const id = +e.target.dataset.id;
        await deleteCourse(id);
        await getCourses();
      } else if (e.target.matches(".course__edit")) {
        const id = +e.target.dataset.id;
        const data = await getSingleCourse(id);
        formPost.elements["image"].value = data.image;
        formPost.elements["title"].value = data.title;
        formPost.elements["author"].value = data.author;
        formPost.elements["rating"].value = data.rating;
        formPost.elements["price"].value = data.price;
        formPost.elements["buyAmount"].value = data.buyAmount;
        formPost.elements["bestSeller"].checked = data.bestSeller;
        formSubmit.textContent = "Update course";
        updateId = id;
        handleAddTask(this.course);
      }
    });
  }
}
