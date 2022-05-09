//ES6
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name);
}
const thaolydev = new Person("ThaoLyDev");
thaolydev.getName();