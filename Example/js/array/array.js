// Mảng là danh sách chưa nhiều giá trị:
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
// 2 Cách tạo mảng
//array literal
const students2 = [];
// array construct
const students = new Array();
//Ví dụ một mảng
//Mảng phức tạp [0, false, undefined, null, "lyy",["lyyy", false, 1200]]
// Mảng đơn giản [0, false, undefined, null, "lyy"]
//[1,2,3,4,5] ["a","b","c","d","e"] [0, false, true, true]
//[]: empty array ->mảng rỗng
// const students1 = ["hoa","dao","cuc","hue","hong"];
//0 1 2 3 4 
// index: vị trí của các phần tử (giá trị) trong mảng và nó bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng -> students1[index]
// console.log(students1[0]);
// console.log(students1[5]);
//Lấy phần tử cuối cùng trong mảng = độ dài của mảng -1 =>array.lenght -1
// console.log(students1[students1.length - 1]);
//Phương thức hay dùng của mảng nên biết:
//length: trả về độ dài của mảng
const students1 = ["hoa","dao","cuc","hue","hong","cuc"];
console.log("---------------array.length--------------------");
console.log(students1.length);
// reverse -> đảo ngược giá trị trong mảng
console.log("---------------array.reverse--------------------");
// console.log(students1.reverse());
//join ->nối các phần tử trong mảng thành chuỗi
console.log("---------------array.join--------------------");
console.log(students1.join());
console.log(students1.join(" "));
//includes ->kiểm tra mảng đó có chứa phần tử nào đó không ?
console.log("---------------array.includes--------------------");
console.log(students1.includes("cuc")); //true
console.log(students1.includes("abc")); //false
//indexOf -> trả về vị trí của phân tử tìm thấy đầu tiên
console.log("---------------array.indexOf--------------------");
console.log(students1.indexOf("dao")); 
//lastIndexOf -> trả về vị trí của phân tử tìm thấy cuối cùng
console.log("---------------array.lastIndexOf--------------------");
console.log(students1.lastIndexOf("cuc"));
//push -> Thêm phần tử vào cuối mảng
console.log("---------------array.push--------------------");
console.log(students1.push("javascript")); 
console.log(students1);
//unshift -> Thêm phần tử vào đầu mảng
console.log("---------------array.unshift--------------------");
console.log(students1.unshift("Frontend")); 
console.log(students1); 
//pop -> xóa phần tử cuối cùng trong mảng
console.log(students1);
students1.pop();
console.log(students1);
//shift -> xóa phần tử đầu tiên trong  mảng
console.log(students1);
students1.shift();
console.log(students1);
