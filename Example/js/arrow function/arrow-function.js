function add(a, b){
    return a + b;
}
var sub1 = (a, b) =>{
    return a - b;
}

var sub2 = (a, b) => a - b;
console.log(add(4,5));
console.log(sub1(6,7));
console.log(sub2(5,6));

//example 2
function person(){
    return {
        name: "A",
        age: 22,
    };
};
console.log(person());
var person2 = ()=>({
    name: "A",
    age:22
});
console.log(person2());