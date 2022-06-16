export default class View {
  constructor() {
    this.courseImg = document.getElementById("add-img");
    this.courseTitle = document.getElementById("add-title");
    this.courseAuthor = document.getElementById("add-author");
    this.courseRating = document.getElementById("add-rating");
    this.coursePrice = document.getElementById("add-price");
    this.courseBuyAmount = document.getElementById("add-buyAmount");
    this.courseBestSeller = document.getElementById("add-best-seller");
    this.courseList = document.getElementById("course__list");
    this.updateForm = document.getElementById('update-form')
    this.addBtn = document.getElementById("submit");
    this.formPost = document.getElementById("form__post");
    this.filterInput = document.getElementById("search-input");
  }

  // Reset the input after add course
  _resetInput() {
    this.courseImg.value = "";
    this.courseTitle.value = "";
    this.courseAuthor.value = "";
    this.courseRating.value = "";
    this.coursePrice.value = "";
    this.courseBuyAmount.value = "";
    this.courseBestSeller.checked = "";
  }

  // Close add course modal
  closeModalDelete() {
    const deleteForm = document.getElementById("modal__delete");
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = "0";
    deleteForm.style.visibility = "hidden";
  }
  //Render 
  displayCourses = (courses) => {
    console.log('courses view', courses);

    if (courses.length !== 0) {
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

        let btnEdit = document.createElement("button")
        btnEdit.className = "course__edit"
        let editIcon = document.createElement("i");
        editIcon.className = "fa fa-pencil";
        btnEdit.append(editIcon);

        btnEdit.addEventListener("click", () => {
          const overlay = document.getElementById('overlay')
          const updateForm = document.getElementById("update-form");
          this.editModal(course)
          updateForm.style.visibility = "visible"
          overlay.style.opacity = "1"
        });

        const btnDelete = document.createElement("button");
        const icondel = document.createElement("i");
        icondel.className = "fa fa-times";
        btnDelete.className = "course__remove";
        btnDelete.append(icondel);

        courseImg.append(img, btnEdit, btnDelete)

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
        
        courseMeta.append(rating, price, buyAmount)

        const bestSeller = document.createElement("div");
        bestSeller.className = "course__best-seller";
        bestSeller.textContent = course.bestSeller;
        
        courseContent.append(title, author, courseMeta, bestSeller)

        courseItem.append( courseImg, courseContent);
        this.courseList.appendChild(courseItem);
      });
    }
  };

  // async function getSingleCourse(id) {
  //   const response = await fetch(`${path.PATH_COURSE}/${id}`);
  //   const data = await response.json();
  //   return data;
  // }

  bindAddNewCourse(handleAddNewCourse) {
    const AddNewCourse = document.getElementById("course__button")
		//open add new course modal
		AddNewCourse.addEventListener("click",()=>{
			const addModal = document.getElementById("add__course-page")
			const overlay = document.getElementById("overlay")
			addModal.style.visibility = "visible"
			overlay.style.opacity = "1"
		})
		//close add  new course modal
		const closeModal = document.getElementById("form__post--cancel")
		closeModal.addEventListener("click",()=>{
			this.closeModalAdd()
		})
		// const closeModalIcon = document.getElementById("modal-close-icon")
		// closeModalIcon.addEventListener("click",()=>{
		// 	this.closeModalAdd()
		// })

    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // validation
      // if (this.courseImg.value == "") {
      //   alert("please enter your url image");
      //   return false;
      //   // return(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
      // }

      // if (this.courseTitle.value == "") {
      //   alert("please enter your title");
      //   return false;
      // }
      // if (this.courseAuthor.value == "") {
      //   alert("please enter your author");
      //   return false;
      // }
      // if (this.courseRating.value == "") {
      //   alert("please enter your rating");
      //   return false;
      // }
      // if (this.coursePrice.value == "") {
      //   alert("please enter your price");
      //   return false;
      // }
      // if (this.courseBuyAmount.value == "") {
      //   alert("please enter your buyAmount");
      //   return false;
      // }

      // validation form
      if (
        this.courseImg.value &&
        this.courseTitle.value &&
        this.courseAuthor.value &&
        this.courseRating.value &&
        this.coursePrice.value &&
        this.courseBuyAmount.value &&
        this.courseBestSeller.checked
      ) {
        handleAddNewCourse(
          this.courseImg.value,
          this.courseTitle.value,
          this.courseAuthor.value,
          this.courseRating.value,
          this.coursePrice.value,
          this.courseBuyAmount.value,
          this.courseBestSeller.checked
        );

        this.closeModalAdd()
        this._resetInput();
      } else {
        alert("Please enter all before create a new course!!");
      }
    });
  }
// ==============================
// Edit course modal
editModal(course){
    let update = document.getElementById('update-form')
    update.className = 'update-form'
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.id = 'wrapper'

    let popup = document.createElement('div')
    popup.className = 'popup'
    update.style.visibility = 'hidden'
    popup.id = 'popup'


    let editImg = document.createElement('h2')
    editImg.className = 'course__title--table'
    editImg.textContent = 'Update course'

    let editTitle = document.createElement('h2')
    editTitle.className = 'form-title'
    editTitle.textContent = 'Update course'

  
    //submit edit
    btnUpdate.addEventListener('click',()=>{
        const overlay = document.getElementById('overlay')
        const updateForm = document.getElementById('update-form')
        const updateBtn = document.getElementById('update-form-btn')
        updateForm.style.visibility = 'hidden'
        overlay.style.opacity = '0'
    })

    const btnClose = document.createElement('button')
    btnClose.textContent = 'Close'
    btnClose.className = "btn-close"

    //close edit modal
    btnClose.addEventListener('click',()=>{
        const overlay = document.getElementById('overlay')
        const updateForm = document.getElementById('update-form')
        const wrrap = document.getElementById('wrapper')
        updateForm.style.visibility = 'hidden'
        overlay.style.opacity = '0'
        wrrap.remove()
    })

  
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
  bindSearchCourse(handler) {
    this.search.addEventListener("click", () => {
      if (this.filterInput.value === "") {
        alert("Enter the course name you want to find");
      }
      if (this.filterInput.vale !== "") {
        handler(this.filterInput.value);
      }
    });
    
    this.filterInput.addEventListener("keydown", async (e) => {
      const response = await fetch(
        `${path.PATH_COURSE}/title_like=${e.target.value}`
      );
      const data = await response.json();
      console.log(data);
    });
  }

  bindFilterCourse(handler) {
   
  }
}
