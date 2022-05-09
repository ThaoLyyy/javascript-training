//ES6
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name);
}
const thaolydev = new Person("ThaoLyDev");
thaolydev.getName();

// class:
class Person2 {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    // getName(){
    //     // console.log(this.name);
    //     return this.name;
    // }
    set name(newName){
        return this._name = newName;
    }
    // setName(newName){
    //     this.name = newName;
    // }
}
const ly = new Person2("ly");
// ly.getName();
// console.log(ly.getName());
// ly.setName("ThaoLy");
// console.log(ly);
console.log(ly.name);
//thay đổi giá trị
ly.name = "ThaoLy";
console.log(ly.name);
// ----class expression----
let Student = class {
    constructor(name){
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}
const Lyy = new Student("Lyy");
console.log(Lyy.name);
// -------truyen class vao function----
function company(aClass){
    return new aClass();
}
let hello = new company(class{
    sayHello() {
        console.log("Hello");
    }
});
hello.sayHello();