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
// có thể là loop: forEach, map, filter
// có thể giống array là có thể loop nhung ko sử dụng được các phương thức như push, pop, shift
// const multiNodes = document.querySelector("item");-> NULL
const multiNodes = document.querySelectorAll("items");
console.log(multiNodes);