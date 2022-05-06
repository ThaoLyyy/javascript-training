/*
  Object prototype:(nguyên mẫu của đối tượng)
  1.Prototype là gì?Thuộc tính là các giá trị được liên kết với một đối tượng JavaScript.
  2.Sử dụng khi nào? 
*/
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
User.prototype.className = 'Ly';
User.prototype.getClassName = function(){
    return this.className;
};
var user = new User('Ly', 'Phạm', 'Avatar 1');
var user2 = new User('Nga', 'Nguyễn', 'Avatar 2');
console.log(user.className);
console.log(user2.getClassName());