export default class View {
  constructor() {
    this.courseImg = document.getElementById("add-img");
    this.courseTitle = document.getElementById("add-title");
    this.courseAuthor = document.getElementById("add-author");
    this.courseRating = document.getElementById("add-rating");
    this.coursePrice = document.getElementById("add-price");
    this.courseBuyAmount = document.getElementById("add-buyAmount");
    this.courseBestSeller = document.getElementById("add-best-seller");
    this.courseList = document.getElementById("courseList");
    this.addBtn = document.getElementById("submit");
    this.formPost = document.getElementById("form__post");
    this.filterInput = document.getElementById("search-input");
  }

  // _resetInput() {
  //   this.courseImg.value = "";
  //   this.courseTitle.value = "";
  //   this.courseAuthor.value = "";
  //   this.courseRating.value = "";
  //   this.coursePrice.value = "";
  //   this.courseBuyAmount.value = "";
  //   this.courseBestSeller.checked = "";
  // }

  display(courses) {
    
    // while (this.courseList.firstChild) {
    //   this.courseList.removeChild(this.courseList.firstChild);
    // }

    if (courses.length !== 0) {
      // const wrapper = document.getElementsByClassName("courseList")
			// 	wrapper[0].innerHTML = ""
      courses.forEach((course) => {
        // const item = document.createElement("div");
        // item.id = course.id;
        // item.className = "course__list";

        const cardCourse = document.createElement("div");
        cardCourse.id = course.id;
        cardCourse.className = "card-course";

        const courseBody = document.createElement("div");
        courseBody.className = "body";

        const img = document.createElement("div");
        img.className = "course__image";
        img.style.backgroundImage = `url(${course.image})`;

        const title = document.createElement("h3");
        title.className = "course__title";
        title.textContent = course.title;

        const author = document.createElement("div");
        author.className = "course__author";
        author.textContent = course.author;

        const rating = document.createElement("div");
        rating.className = "course__rating";
        rating.textContent = course.rating;

        const buyAmount = document.createElement("div");
        buyAmount.className = "course__enroll";
        buyAmount.textContent = course.buyAmount;

        const price = document.createElement("div");
        price.className = "course__price";
        price.textContent = course.price;

        const bestSeller = document.createElement("div");
        bestSeller.className = "course__best-seller";
        bestSeller.textContent = course.bestSeller;

        courseBody.append(
          img,
          title,
          author,
          rating,
          price,
          buyAmount,
          bestSeller,
        );

        cardCourse.append(img, courseBody);
        this.courseList.appendChild(cardCourse);

        // item.append(img, courseBody);
        // this.courseList.appendChild(item);
      });
    }
  }

  // async function getSingleCourse(id) {
  //   const response = await fetch(`${path.PATH_COURSE}/${id}`);
  //   const data = await response.json();
  //   return data;
  // }

  bindAddNewCourse(handleAddNewCourse) {
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleAddNewCourse(this.courseImg.value, this.courseTitle.value, this.courseAuthor.value, this.courseRating.value, this.coursePrice.value, this.courseBuyAmount.value, this.courseBestSeller.checked);
    });
  }

  // bindAddNewCourse(handleAddNewCourse) {
  //   formPost.addEventListener("submit", async (e) => {
  //     e.preventDefault();
  //     const course = {
  //       image: this.elements["image"].value,
  //       title: this.elements["title"].value,
  //       author: this.elements["author"].value,
  //       rating: +this.elements["rating"].value,
  //       price: +this.elements["price"].value,
  //       bestSeller: this.elements["bestSeller"].checked,
  //       buyAmount: +this.elements["buyAmount"].value,
  //     };
  //     console.log(updateId);
  //     updateId
  //       ? await updateCourse({ id: updateId, ...course })
  //       : await addNewCourse(course);
  //     this.reset();
  //     await getCourses();
  //     updateId = null;
  //     formSubmit.textContent = "Add course";
  //     handleAddNewCourse(id);
  //   });
  // }
  // bindAddNewCourse(handleAddNewCourse) {
  //   courseList.addEventListener("click", async (e) => {
  //     if (e.target.matches(".course__remove")) {
  //       const id = +e.target.dataset.id;
  //       await deleteCourse(id);
  //       await getCourses();
  //     } else if (e.target.matches(".course__edit")) {
  //       const id = +e.target.dataset.id;
  //       const data = await getSingleCourse(id);
  //       formPost.elements["image"].value = data.image;
  //       formPost.elements["title"].value = data.title;
  //       formPost.elements["author"].value = data.author;
  //       formPost.elements["rating"].value = data.rating;
  //       formPost.elements["price"].value = data.price;
  //       formPost.elements["buyAmount"].value = data.buyAmount;
  //       formPost.elements["bestSeller"].checked = data.bestSeller;
  //       formSubmit.textContent = "Update course";
  //       updateId = id;
  //       handleAddTask(id);
  //     }
  //   });
  // }
}
