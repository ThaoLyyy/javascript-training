//Object(đối tượng):Đối tượng là một loại biến đặc biệt, nó lưu trữ nhiều cái tên và mỗi cái tên sẽ có một giá trị
var myInfo = {
    name:'Thao Ly',
    age: 18,
    address: 'Da Nang, VN'
};
myInfo['my-email']= 'thaolydn1805@gmail.com'; //them 1 key
// console.log(myInfo);
console.log(myInfo.name);   //cách 1
// console.log(myInfo['name']);  //cách 2

// console.log(myInfo['email']);//nếu lấy ra 1 key ko có thì trả về undefined
//--------Đặt Object cách #-------------------
var emailKey = 'email';
var myInfo2 = {
    name:'Thao Ly',
    age: 18,
    address: 'Da Nang, VN',
    [emailKey]:'thaolydn1805@gmail.com',
    phone: '0705173314',
    getName: function() {
        return this.name;
    },
    getAge: function() {

    }
};
//Trong TH nếu là Function--> Phương thức  / method
//                Others --> Thuộc tính  / property
// delete myInfo2.age;
console.log(myInfo2);
