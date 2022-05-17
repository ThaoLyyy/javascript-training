// text: nội dung nằm giữa selector vd <a>text</a> 
// 1.textContent: nội dung có chứa khoản trắng, nếu ở trong chứa html vẫn lấy 
const spinner = document.querySelector("#spinner");
// thay đổi text content
// spinner.textContent = "Hi text content";
console.log(spinner.textContent);
console.log(spinner.innerText);//ko lấy dc nội dung html, ko lấy khoản trắng phía trc và sau

//spinner.textContent = '<div class="demo">hi html</div>'; 
// 3.innerHTML -> Lấy ra nội dung của selector bao gồm cả HTML 
console.log(spinner.innerHTML);
spinner.innerHTML = '<div class="demo">hi html</div>'; 
//parse
