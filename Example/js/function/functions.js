//functions (Hàm)
//khai báo function
// Cú pháp(Syntax):function functionName(parameters){
// Your code here
// }
//parameters: tham số 
// Viết hàm tính tổng 2 số a và b
function sum(a = 0,b = 0) {
    // console.log("is it working");
    console.log(a, b);
    return a + b;
    //return 
    //return value
    // Không có return thì kết quả của hàm trả về là undefined 
    return;
}
//functions sum(parameter = defaultValue){}
//sum(): invoke function
console.log(sum(200, 1000));
//invoke function sum(arguments)đối số
// Lưu function vào 1 biến rồi gọi sau này
function add(a = 0, b = 0) {
    console.log(a+b);
    return a + b;
}
// add(300,1000);
const sum2 = add; // gans function cho biến sum2 vẫn chưa dc gọi
sum2(400,500);
// tham số là function
// Tính trung bình của a và b -> (a + b) / 2
//fn: function
function average(a, b, fn) {
    const total = fn(a, b);
    // return (a + b) / 2
    return total / 2;
}
let result = average(400, 500, sum2);
console.log(`result ${result}`);

//kiểm tra điều kiện cho a và b. Nếu chúng bằng null hoặc undefined thì sẽ return luôn mà không thực hiện tính tổng. 
function sum(a, b) {
    if (a === null || a === undefined) {
      console.log("Tham số không hợp lệ!");
      return;
    }
  
    if (b === null || b === undefined) {
      console.log("Tham số không hợp lệ!");
      return;
    }
  
    return a + b;
  }
  
  const result1 = sum(); 
  //Anonymous fuction(function expression)
//Fuction declaration
//không bị hoisting
const logName = function(){
    console.log('your name');
};
logName();
//IIFE => immmediately invoked funtion exection
(function(){
    console.log('this is IIFE function');
})();
//Scope
//Global scope, function scope
let myName = "ThaoLy";//Global
function logYourName(){
    let myName2 = myName;//function scope
    console.log(myName2);
} 
logYourName();

//block scope(chir truy suaats dc been trong)
// var message;
let message;
if (2 > 1){
    // let message = "Hello ThaoLy";
    const message = "Hello ThaoLy";
    //global scope
    //hoisted
     message2 = "Hello Lyyy";
    // alert(message);
}
// alert(message2);

//Lexical scope(định nghĩa scope của biến đó bởi vị trí của nó trong scope)
let aNewName = "ThaoLy";//global scope
function sayHello(){
    let message = "Hi";//block scope
    console.log(`${message5} ${aNewName}`);
}
// sayHello();
// --------
