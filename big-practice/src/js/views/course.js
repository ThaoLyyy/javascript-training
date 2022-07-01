export default class View {
  constructor() {
    this.courseImg = document.getElementById("course__img");
    this.courseTitle = document.getElementById("course__title");
    this.courseAuthor = document.getElementById("course__author");
    this.courseRating = document.getElementById("course__rating");
    this.coursePrice = document.getElementById("course__price");
    this.courseBuyAmount = document.getElementById("course__buyAmount");
    this.courseBestSeller = document.getElementById("course__bestseller");
    this.courseList = document.getElementById("course__list");
    this.courseTitleTable = document.getElementById("title__table");
    this.modalTitleDel = document.getElementById("modal__container--title");
    this.submitBtn = document.getElementById("btn__submit");
    this.cancelBtn = document.getElementById("btn__cancel");
    this.formPost = document.getElementById("form__post");
    this.searchCourse = document.getElementById("search__input");
    this.courseModal = document.getElementById("course__popup");
    this.courseModalDel = document.getElementById("modal__delete");
    this.courseBtn = document.getElementById("course__button");
    this.formSubmit = document.getElementById("form__post--create");
    this.btnClose = document.getElementById("btn__close");
    this.courseRemove = document.getElementById("course__remove");
    this.cancelDel = document.getElementById("cancelDel__btn");
    this.ENTER_KEY = 13;
    let updateId = null;
  }

  // Reset the input after add course
  resetInput = () => {
    this.courseImg.value = "";
    this.courseTitle.value = "";
    this.courseAuthor.value = "";
    this.courseRating.value = "";
    this.coursePrice.value = "";
    this.courseBuyAmount.value = "";
    this.courseBestSeller.checked = "";
  };

  openCourseModal = (course) => {
    if (course) {
      // change value for form
      this.courseTitleTable.textContent = "edit course";
      this.courseImg.value = course.image;
      this.courseTitle.value = course.title;
      this.courseAuthor.value = course.author;
      this.courseRating.value = course.rating;
      this.coursePrice.value = course.price;
      this.courseBuyAmount.value = course.buyAmount;
      this.courseBestSeller.checked = course.bestSeller;
      this.submitBtn.textContent = "update course";
      // updateId = id;
    }
    this.courseModal.style.visibility = "visible";
  };

  closeCourseModal = () => {
    this.courseModal.style.visibility = "hidden";
    console.log("closeCourseModal");
    this.resetInput();
  };

  openCourseModalDel = () => {
    this.courseModalDel.style.visibility = "visible";
  };
  // Close delete course modal
  closeCourseModalDel() {
    this.courseModalDel.style.visibility = "hidden";
    // console.log("courseModalDel");
  }

  //Render
  displayCourses = (courses) => {
    if (courses.length > 0) {
      const wrapper = document.getElementsByClassName("course__list");
      wrapper[0].innerHTML = "";

      courses.forEach((course) => {
        let courseItem = document.createElement("div");
        courseItem.id = course.id;
        courseItem.className = "course__item";

        let courseImg = document.createElement("div");
        courseImg.className = "course__image-btn";

        let img = document.createElement("div");
        img.className = "course__image";
        img.style.backgroundImage = `url(${course.image})`;

        let btnEdit = document.createElement("button");
        btnEdit.className = "course__edit";
        let editIcon = document.createElement("i");
        editIcon.className = "fa fa-pencil";
        btnEdit.append(editIcon);

        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("id", "course__remove");
        const icondel = document.createElement("i");
        // icondel.setAttribute("id", "close__icon");
        icondel.className = "fa fa-times";
        btnDelete.className = "course__remove";
        btnDelete.idName = "course__remove";
        btnDelete.append(icondel);

        courseImg.append(img, btnEdit, btnDelete);

        let courseContent = document.createElement("div");
        courseContent.className = "course__content";
        courseContent.textContent = course.courseContent;

        const title = document.createElement("h3");
        title.className = "course__title";
        title.textContent = course.title;

        const author = document.createElement("div");
        author.className = "course__author";
        author.textContent = course.author;

        const courseMeta = document.createElement("div");
        courseMeta.className = "course__meta";
        courseMeta.textContent = course.courseMeta;

        const rating = document.createElement("div");
        rating.className = "course__rating";
        rating.textContent = course.rating;

        const price = document.createElement("div");
        price.className = "course__price";
        price.textContent = course.price;

        const buyAmount = document.createElement("div");
        buyAmount.className = "course__enroll";
        buyAmount.textContent = course.buyAmount;

        courseMeta.append(rating, price, buyAmount);

        const bestSeller = document.createElement("div");
        bestSeller.className = "course__best-seller";
        bestSeller.textContent = course.bestSeller;

        courseContent.append(title, author, courseMeta, bestSeller);

        courseItem.append(courseImg, courseContent);
        this.courseList.appendChild(courseItem);
      });
    }
  };

  bindShowCourseModal = () => {
    this.courseBtn.addEventListener("click", () => {
      this.openCourseModal();
    });
  };

  bindCloseCourseModal = () => {
    this.cancelBtn.addEventListener("click", () => {
      this.closeCourseModal();
    });
  };

  bindBtnClose = () => {
    this.btnClose.addEventListener("click", () => {
      this.closeCourseModal();
    });
  };

  // const buttonElement = document.querySelector("button");
  bindShowCourseModalDel = () => {
    this.courseList.addEventListener("click", () => {
      this.openCourseModalDel();
    });
  };

  bindCloseCourseModalDel = () => {
    this.cancelDel.addEventListener("click", () => {
      this.closeCourseModalDel();
    });
  };

  /**
   * Add event 'click' for element button
   * @param {function} handleAddNewCourse
   */
  bindAddNewCourse(handleAddNewCourse) {
    this.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // validation
      if (this.courseImg.value == "") {
        alert("please enter your url image");
        return false;
      }
      if (this.courseTitle.value == "") {
        alert("please enter your title");
        return false;
      }
      if (this.courseAuthor.value == "") {
        alert("please enter your author");
        return false;
      }
      if (this.courseRating.value == "") {
        alert("please enter your rating");
        return false;
      }
      if (this.coursePrice.value == "") {
        alert("please enter your price");
        return false;
      }
      if (this.courseBuyAmount.value == "") {
        alert("please enter your buyAmount");
        return false;
      }

      // validation form
      if (
        this.courseImg.value &&
        this.courseTitle.value &&
        this.courseAuthor.value &&
        this.courseRating.value &&
        this.coursePrice.value &&
        this.courseBuyAmount.value
      ) {
        handleAddNewCourse({
          image: this.courseImg.value,
          title: this.courseTitle.value,
          author: this.courseAuthor.value,
          rating: +this.courseRating.value,
          price: +this.coursePrice.value,
          buyAmount: +this.courseBuyAmount.value,
          bestSeller:
            this.courseBestSeller.checked === true ? "BestSeller" : "",
        });
        // this.modelContent.insertAdjacentHTML = "";
        this.courseList.innerHTML = "";
        // this.closeCourseModal();
        // console.log(updateId);
        // updateId ? await updateCourse({ id: updateId, ...dataParam }) : await addNewCourse(dataParam);
        // this.resetInput();
        // await getElementById();
        // updateId = null;

        this.resetInput();
      } else {
        alert("Please enter all before create a new course!!");
      }
    });
  }

  // edit
  /**
   * function use id
   * Add event 'click' for courseList element
   * Add event 'click' for edit button
   */
  bindEditCourseModal = (renderCourseModal) => {
    this.courseList.addEventListener("click", (e) => {
      //
      if (e.target.className === "course__edit") {
        const id = e.target.parentNode.parentNode.id;
        const course = renderCourseModal(id);
        this.openCourseModal(course);
      }
    });
  };

  /**
   * function use id to delete course
   * Add event 'click' for courseList element
   * Add event 'click' for delete button
   * @param {function} handlerDeleteCourse
   */
  bindDeleteCourse(handlerDeleteCourse) {
    this.courseList.addEventListener("click", (e) => {
      let check = 0;
      if (e.target.className === "course__remove") {
        const btnDel = document.getElementById("delete__btn");
        btnDel.addEventListener("click", () => {
          if (check === 0) {
            const id = e.target.parentNode.parentNode.id;
            handlerDeleteCourse(id);
            this.closeCourseModalDel();
            check++;
          }
        });
      }
    });
  }

  /**
   * function use information to search course
   * Add event 'keydown' for search input
   * @param {function} handleSearchCourse
   */
  bindSearchCourse(handleSearchCourse) {
    this.searchCourse.addEventListener("keyup", (e) => {
      if (e.which === this.ENTER_KEY) {
        handleSearchCourse(this.searchCourse.value.trim());
      }
    });
  }
}
