//Variables scope
var number = 10;

function calc() {
    return number;
}
console.log(calc());

var name = 'Ly';
function x() {
    var name = 'Lyy';
    console.log(name);
}
console.log(name);
x();