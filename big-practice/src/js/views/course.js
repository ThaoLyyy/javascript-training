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

  _resetInput() {
    this.courseImg.value = "";
    this.courseTitle.value = "";
    this.courseAuthor.value = "";
    this.courseRating.value = "";
    this.coursePrice.value = "";
    this.courseBuyAmount.value = "";
    this.courseBestSeller.checked = "";
  }

  display(courses) {

    if (courses.length !== 0) {
      courses.forEach((course) => {
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

        // const delBtn = document.createElement("button");
        // delBtn.className = "course__remove";
        // delBtn.textContent = course.delBtn;

        courseBody.append(
          img,
          title,
          author,
          rating,
          price,
          buyAmount,
          bestSeller
        );

        // const btnDelete = document.createElement("button");
        // const icon1 = document.createElement("i");
        // icon1.className = "fa-solid fa-trash-can";
        // btnDelete.className = "delete-btn";
        // btnDelete.textContent = "Delete";
        // btnDelete.append(icon1);

        cardCourse.append(img, courseBody);
        this.courseList.appendChild(cardCourse);
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
      handleAddNewCourse(
        this.courseImg.value,
        this.courseTitle.value,
        this.courseAuthor.value,
        this.courseRating.value,
        this.coursePrice.value,
        this.courseBuyAmount.value,
        this.courseBestSeller.checked
      );
    });
  }
  
  // bindDeleteCourse(handleDeleteCourse) {
  //   this.courseList.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     if (e.target.className === "course__remove") {
  //       const id = e.target.parentElement.id;
  //       handleDeleteCourse(id);
  //     }
  //   });
  // }
  // --------------------
  bindSearchCourse(handler){
    this.search.addEventListener('click',() => {
      if(this.filterInput.value === ""){
        alert("Enter the course name you want to find")
      }
      if(this.filterInput.vale !== ""){
        handler(this.filterInput.value)
      }
    })
    
    this.filterInput.addEventListener("keydown",async (e)=>{
      const response = await fetch(`${path.PATH_COURSE}/title_like=${e.target.value}`)
      const data = await response.json()
      console.log(data)
    })
  }

  
  bindFilterCourse(handler){
   
  }


}
