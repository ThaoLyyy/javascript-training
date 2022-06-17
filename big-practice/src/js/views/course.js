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
    this.updateForm = document.getElementById("update-form");
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
  //open add course modal
  openAddModal() {
    const addModal = document.getElementById("course__popup");
    addModal.style.visibility = "visible";
  }
  // Close add course modal
  closeModalAdd() {
    const addModal = document.getElementById("course__popup");
    addModal.style.visibility = "hidden";
  }
  
  // Close add course modal
  closeModalDelete() {
    const deleteForm = document.getElementById("modal__delete");
    deleteForm.style.visibility = "visible";
  }
  //Render
  displayCourses = (courses) => {
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

        let btnEdit = document.createElement("button");
        btnEdit.className = "course__edit";
        let editIcon = document.createElement("i");
        editIcon.className = "fa fa-pencil";
        btnEdit.append(editIcon);

        btnEdit.addEventListener("click", () => {
          // const overlay = document.getElementById("overlay");
          const updateForm = document.getElementById("update-form");
          this.editModal(course);
          updateForm.style.visibility = "visible";
          // overlay.style.opacity = "1";
        });

        const btnDelete = document.createElement("button");
        const icondel = document.createElement("i");
        icondel.className = "fa fa-times";
        btnDelete.className = "course__remove";
        // btnDelete.textContent = "Delete";
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
  /**
   * Add event 'click' for element button
   * @param {function} handleAddNewCourse
   */
  bindAddNewCourse(handleAddNewCourse) {
    const AddNewCourse = document.getElementById("course__button");
    //open add new course modal
    AddNewCourse.addEventListener("click", () => {
      const addModal = document.getElementById("course__popup");
      addModal.style.visibility = "visible";
    });
    //close add  new course modal
    const closeModal = document.getElementById("form__post--cancel");
    closeModal.addEventListener("click", () => {
      this.closeModalAdd();
    });

    this.addBtn.addEventListener("click", e => {
      e.preventDefault();
      // validation
      if (this.courseImg.value == "") {
        alert("please enter your url image");
        return false;
      }
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

        this.closeModalAdd();
        this._resetInput();
      } else {
        alert("Please enter all before create a new course!!");
      }
    });
  }
  // ==============================
  // Edit course modal
  editModal(course) {
    let update = document.getElementById("update__form");
    update.className = "update__form";
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    wrapper.id = "wrapper";

    let popup = document.createElement("div");
    popup.className = "course__popup";
    update.style.visibility = "hidden";
    popup.id = "course__popup";

    let popupContent = document.createElement("div");
    popupContent.className = "popup__content";
    popupContent.textContent = "Update course";

    let courseContainer = document.createElement("div");
    courseContainer.className = "course__container";
    courseContainer.textContent = "Update course";

    let titleTable = document.createElement("h2");
    titleTable.className = "course__title--table";
    titleTable.textContent = "Update course";

    let formPost = document.createElement("form");
    formPost.className = "form__post";
    formPost.textContent = "Update course";

    let editImg = document.createElement("input");
    editImg.className = "add-img";
    editImg.textContent = "Update course";

    let inputUpdateImg = document.createElement("input");
    inputUpdateImg.className = "update-image";
    inputUpdateImg.id = "update-image";
    inputUpdateImg.value = course.image;

    let inputUpdateTitle = document.createElement("input");
    inputUpdateTitle.className = "update-title";
    inputUpdateTitle.id = "update-title";
    inputUpdateTitle.value = course.title;

    let inputUpdateAu = document.createElement("input");
    inputUpdateAu.className = "update-author";
    inputUpdateAu.id = "update-author";
    inputUpdateAu.value = course.author;

    let inputUpdateRat = document.createElement("input");
    inputUpdateRat.className = "update-rating";
    inputUpdateRat.id = "update-rating";
    inputUpdateRat.value = course.rating;

    let inputUpdatePri = document.createElement("input");
    inputUpdatePri.className = "update-price";
    inputUpdatePri.id = "update-price";
    inputUpdatePri.value = course.price;

    let inputUpdateBuyA = document.createElement("input");
    inputUpdateBuyA.className = "update-buyAmount";
    inputUpdateBuyA.id = "update-buyAmount";
    inputUpdateBuyA.value = course.buyAmount;

    let inputUpdateBestS = document.createElement("input");
    inputUpdateBestS.className = "update-bestSeller";
    inputUpdateBestS.id = "update-bestSeller";
    inputUpdateBestS.value = course.buyAmount;
    let labelUpdateBestS = document.createElement('label')
		labelUpdateBestS.textContent = 'bestSeller'

    let btnUpdate = document.createElement("button");
    btnUpdate.textContent = "Update course";
    btnUpdate.className = "btn-update";
    btnUpdate.id = "btn-update";

    //submit edit
    btnUpdate.addEventListener("click", () => {
      const updateForm = document.getElementById("update-form");
      const updateBtn = document.getElementById("Cancel");
      updateForm.style.visibility = "hidden";
    });

    const btnCancel = document.createElement("button");
    btnCancel.textContent = "Cancel";
    btnCancel.className = "form__post--cancel";

    //close edit modal
    btnCancel.addEventListener("click", () => {
      const updateForm = document.getElementById("update__form");
      const wrapper = document.getElementById("wrapper");
      updateForm.style.visibility = "hidden";
      wrapper.remove();
    });

    formPost.append( inputUpdateImg,inputUpdateTitle);
    updateFieldTT.append(labelUpdateTT, inputUpdateTitle);
    updateFieldDes.append(labelUpdateDes, inputUpdateDes);
    updateFieldCate.append(labelUpdateCate, inputUpdateCate);
    updateFieldAu.append(labelUpdateAu, inputUpdateAu);
    updateFieldImg.append(labelUpdateImg, inputUpdateImg);

    const btn = document.createElement("div");
    btn.className = "update-form-btn";
    btn.id = "update-form-btn";

    btn.append(btnUpdate, btnClose);
    popup.append(
      editTitle,
      updateFieldTT,
      updateFieldDes,
      updateFieldCate,
      updateFieldAu,
      updateFieldImg
    );
    wrapper.append(popup, btn);
    update.appendChild(wrapper);
  }

  /**
   * function use id to update course
   * Add event 'click' for courseList element
   * Add event 'click' for edit button
   * @param {function} handleUpdateCourse
   */
  bindUpdateCourse(handleUpdateCourse) {
    this.courseList.addEventListener("click", (e) => {
      if (e.target.className === "edit-btn") {
        //get id and all the value
        const id = e.target.parentElement.id;
        const updateImage = document.getElementById("update-image");
        const updateTitle = document.getElementById("update-title");
        const updateAuthor =  document.getElementById("update-author");
        const updateRating =  document.getElementById("update-rating");
        const updatePrice = document.getElementById("update-Price");
        const updateBuyAmount = document.getElementById("update-BuyAmount");
        const updateBestSeller = document.getElementById("update-BestSeller");
        const edit = document.getElementById("btn-update");
        //submit edit
        edit.addEventListener("click", () => {
          handler(
            id,
            updateTitle.value,
            updateAuthor.value,
            updateDes.value,
            updateCate.value,
            updateImg.value
          );
          const wrapper = document.getElementById("wrapper");
          //remove edit modal
          if (wrapper) {
            wrapper.remove();
          }
        });
      }
    });
  }

  // delete
  /**
     * function use id to delete course
     * Add event 'click' for courseList element
     * Add event 'click' for delete button
     * @param {function} handlerDeleteCourse
     */
	bindDeleteCourse(handleDeleteCourse) {
    this.courseList.addEventListener('click', e => {
      //Use check variable to avoid duplicate event
      let check = 0
        if (e.target.className === 'course__remove') {
            const id = e.target.parentElement.id
            const deleteForm = document.getElementById('delete-form')

            icon.addEventListener('click',()=>{
              this.closeModalDelete()
              check++
            })
            const sureDelete = document.getElementById("delete__btn")
            sureDelete.addEventListener('click',()=>{
              if(check === 0) {
                handler(id)
                this.closeModalDelete()
                check++
              }
            })
        }
    })
  }

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
