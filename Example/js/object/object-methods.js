// Object methods:Các phương thức JavaScript là các hành động có thể được thực hiện trên các đối tượng.
// name = person.fullName();
// Thêm một phương thức mới vào một đối tượng
// person.name = function () {
//     return this.firstName + " " + this.lastName;
//   };

//----
var post = {
    id: 1,
    slug:'javascript',
    title: 'javascript'
};
post.getTitleLink = function(){
    var markup = '';
    markup += '<a href ="' + this.slug + '">';
    markup += this.title;
    markup += '</a>';
    return markup;
};
var title = post.getTitleLink();
console.log(title);
