//Object constructor:(xây dựng đối tượng)
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
var author = new User('Ly', 'Phạm', 'Avatar');
var user = new User('Nga', 'Nguyễn', 'Avatar');

author.title = 'Được tạo bởi Ly';
user.comment ='Học javascript basic';
// console.log(author);
console.log(author.constructor);

console.log(user);