// DOM là gì? (Document Object Model)
// DOM attributes
//DOM node

/**
 * 2.Select nodes
 * 2.1 document.querySelector("selector")-> tả về 1 node nếu tồn tại selector đó, ngược lại nó sẽ trả về null
 * selector: .header, p, body, #heading,....
 * 
 */
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");
// console.log(singleNode4);
// 2.2 document.querySelectorAll("selector") -> trả về NodeList chưa danh sách các node, nếu không có thì trả về  empty
// có thể là loop và sử dụng forEach
// có thể giống array là có thể loop nhung ko sử dụng được các phương thức như push, pop, shift
// const multiNodes = document.querySelector("item");-> NULL
const multiNodes = document.querySelectorAll(".item"); 
// for (let i = 0; i < multiNodes.length; i++) {
//     console.log(multiNodes[i]);
// }
// console.log(multiNodes);

/**
 * 2.3 document.getElementByClassName("className") -> trả về một HTMLCollection chứa danh sách các node, nếu không có thì trả về empty []
 * 
 */
const classNodes = document.getElementsByClassName("item");
// console.log(classNodes);
/**
 * 2.4 document.getElementsByTagName("tagName")
 */
const tagNodes = document.getElementsByTagName("h1");
console.log(tagNodes);
/**
 * 2.5 document.getElementsById("tagName") -> trả về 1 node
 */
// const idNode = document.getElementsById("spinners");
const idNode = document.getElementsById("#spinners");
console.log(idNode);
// Hay dùng nhất: document.querySelector(tag, class, id);
// document.querySelectorAll(tag, class);