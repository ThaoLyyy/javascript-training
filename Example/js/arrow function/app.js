function sum(a,b){
    return a + b;
}
//arrow function(Hàm mũi tên)
let sumA = (a, b) => {
    return a + b;
}
console.log(sum(2, 3));
console.log(sumA(2, 3));
//Example
//function to calculate age -Normal to Arrow
const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    console.log("Age is: ", currentDate.getFullYear(), currentDate.getMonth(), currentDate);
}
calculateAge("May 18, 1999 ");
// Hàm Arrow là dạng rút gọn của định nghĩa hàm truyền thống, nhưng có một số hạn chế là ko thể dùng dc trong tất cả các trường hợp 
// Khác nhau và hạn chế của Arrow:
// - Không có kết nối với this hoặc super và không thể dùng như các phương thức 
//- Không có đối số hoặc từ khóa new.target
// - Không phù hợp với các phương thức gọi,  áp dụng và gắn kết(binding) dựa trên 1 phạm vi(scope)
// - Không dùng như constructor(hàm đựng) để tạo đối tượng
//- Không  dùng yield trong thân hàm
//Cú Pháp:
// - Gồm 1 tham số và không có lệnh return:
//  param => expression 
// - Gồm nhiều tham số và không có lệnh return
// (param1, paramN) => expression
// Gồm 1 tham số và chứa nhiều lệnh trong thân hàm 
 param => {
    let a = 1;
    return a + param;
}
// - Gồm nhiều tham số và nhiều lệnh trong thân hàm
(param, paramN) =>{
    let a = 1;
    return a + param + paramN;
}
// Trả về biểu thức hằng chuỗi
params => ({foo: "a"}) //returing the object {foo: "a"}
//Hỗ trợ tham số Rest :
// (a, b, ...r) => expression
//Hỗ trợ tham số ngầm định :
// (a=400, b=200, c) => expression
// Hỗ trợ destructuring tham số:
// ([a, b] = [10, 20]) => a + b; //result is 30
// ({a, b} = {a:10, b:20}) => a+b //result is 30


