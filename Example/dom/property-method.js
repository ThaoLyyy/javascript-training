// 1. selector.getAttribute("attribute") -> lấy giá trị của attribute selector mong muốn
// attribute: -> Thuộc tính :href, id, class, src, style
const link = document.querySelector(".link");
// console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
// li.getAttribute("class");
li.forEach(item => {
    console.log();
})
console.log(li);
// if(link) { 
// }

// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach(item => item.setAttribute("target", "_blank"))
// /3: selector.removeAttribute("attribute")-> xóa attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("style");