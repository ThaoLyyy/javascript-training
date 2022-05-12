//Variables scope
var number = 10;

function calc() {
  return number;
}
console.log(calc());

var name = "Ly";
function x() {
  var name = "Lyy";
  console.log(name);
}
console.log(name);
x();

/* Scope - Phạm vi
- Các loại phạm vi:
   - Global -Toàn cầu:
    - Code block - Khối mã:let, const
   - Local scope - Hàm: var, function
- Khi gọi mỗi hàm luôn có một phạm vi mới được tạo
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó
-  Cách thức một biến được truy cập 
- Khi nào một biến bị xóa khỏi bộ nhớ?
    - Biến toàn cầu?
    - Biến trong code Block & trong hàm?
    - Biến trong hàm được tham chiếu bởi một hàm?
-------
*/
//global
var message = "Hoc ve scope 1";

function logger() {
  log();
}
logger();

// Code block
{
  const age = 22;
}
console.log(age);
//if else, for, while
if (true) {
  const age = 22;
}

// function logger() {
//     function logger2() {
//         console.log("LOG 2");
//     }
//     logger2();
// }
// logger();

// let, const
function logger() {
    const message = "thuoc code block"
    console.log(message);
}
logger();

// - Khi gọi mỗi hàm luôn có một phạm vi mới được tạo
function logger(first, last) {
    console.log(first, last);
}
logger('Ly','Phạm')
logger('Đào','Phạm')
logger('Nga','Nguyễn')

// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó

// Bên trong
const fullName = "A Nguyễn"

function logger(first, last) {
    console.log(first, last);
    const age = 22;
    console.log(age, fullName);
}
logger('Ly','Phạm')
logger('Đào','Phạm')
logger('Nga','Nguyễn')

// bên ngoài
function logger() {
    const age = 22;
    function logger3(){
        console.log(age);
    }
    logger3()
}
logger();

// -  Cách thức một biến được truy cập : trong những họp nhỏ hơn luôn truy cập được trong hộp lớn hơn

const age = 18
{
    const age = 16
    {
        const age = 14
        {
            const age = 12
            console.log(age);
        }
    }
}