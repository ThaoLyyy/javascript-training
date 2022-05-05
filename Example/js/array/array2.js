console.log("-----array.slice--------");
//Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion","horse","elephant"];
//slice():Tạo ra mảng mới giống hệt mảng ban đầu 
const animals2 = animals.slice();
// ["tiger", "lion","horse","elephant"];
console.log(animals2);
// slice(start). start -> vị trí index ở trong mảng
const animals3 = animals.slice(1);
console.log(animals3);
// slice(start, end) .start:là vị trí bắt đầu, end: là vị trí kết thúc
const animals4 = animals.slice(1, 3);
// ['lion', 'horse', 'elephant']
console.log(animals4);
const animals5 = animals.slice(-1);
console.log(animals5);
//Nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
console.log("-----array.splice--------");
const pets = ["dog", "cat","bird","dragon"];
//splice(start)
// const pets2 = pets.splice(2);
// console.log(pets2);
//splice(start, deleteCount)deleteCount:là số lượng phần tử muốn xóa hoặc thay thế
// const pets3 = pets.splice(0, 4);
//empty array:mảng rỗng
//splice(start, deleteCount, item1, item2, itemN)deleteCount:LÀ SỐ LƯỢNG PHẦN TỬ MUỐN XÓA HOẶC THAY THẾ
const pets3 = pets.splice(0, 2, "dinasour","pig", false,100);
//["dog", "cat","bird","dragon"];
console.log(pets);
//sort:sắp xếp các phần tử trong mảng theo chuẩn unicode-16
console.log("-----array.sort--------");
const random = [1,9999,18,10,5, 99];
//[1, 10, 18, 5, 99, 9999]
console.log(random.sort());
// sort(function(a,b))
//function(callback)
const random2 = random.sort(function(a, b) {
    //Cách 1:
    if (a > b) return 1;//đổi vị trí cho nhau
    if (b > a) return -1; //không đổi vị trí cho nhau
});
//cách 2:
const random3 = random.sort((a,b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);//[1, 5, 10, 18, 99, 9999]
//sort bổ sung 
// const random4 = [1,9999,100000,5,09]
const random4= random.sort((a,b) => (a > b ? 1 : -1));
console.log(random4);

//find:trả về phần tử đầu tiên trong mảng thỏa điều kiện nào đó
console.log("-----array.find--------");
const number = [1,9999,18,10,5, 99];
//tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = number.find(element => element > 10);
//Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefined
console.log(findYourNumber);//9999
//findIndex: trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
console.log("-----array.findIndex--------");
const findYourIndex = number.findIndex(element => element > 10);
//Nếu kết quả không tìm thấy thì sẽ trả về là -1
console.log(findYourIndex);//1
//map: duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
console.log("-----array.map--------");
const listNumber = [1,2,3,4,5];
//trả ra một mảng mới mà các số (giá trị) trong mảng cũ nhân 2
//.map(callback(value, index, array))
const listNumberDouble = listNumber.map(function(value, index, array){
    return value * 2;
});
console.log(listNumberDouble);
[2, 4, 6, 8, 10]
console.log("-----array.forEach--------");
const listNumberTripple = listNumber.forEach((value, index, array) =>{
    return value * 3;
});
console.log(listNumberTripple);
//Hãy cho biết sự khác nhau giữa forEach # map
// 1.forEach: ko return dc   # map return dc
// 2.forEach thì ko          # map trả ra mảng mới dựa vào mảng ban đầu
//3.forEach ko return dc sẽ chạy mãi ko dừng dùng trong DOM

console.log("-----array.filter-------");
//dùng các phần tử trong mảng thỏa điều kiện nào đó
//filter: Dùng để filter(sàng lọc) các phần tử trong mảng thảo điều kiện nào đó
//.filter(callback(value, index, array))
//const listNumber = [1,2,3,4,5];
const greaterThanThree = listNumber.filter(item=> item > 3);
console.log(listNumber);
console.log(greaterThanThree);
// some # every (trả về true or false)
console.log("-----array.some-------");
//Trả về true khi thỏa 1 điều kiện và ngược lại trả về false khi không thỏa điều kiện nào cả
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
console.log("-----array.every-------");
//chỉ trả về true khi tất cả điều kiện đúng, ngược lại chỉ 1 cái sai là nó sẽ return false
const everyNumber = listNumber.every((value) => value > 2);
console.log(everyNumber);
//true or false
//reduce: gom tất cả các phần tử trong mảng lại 1
console.log("-----array.reduce-------");
//.reduce((a, b)=> {}, initialize value);
const totalNumber = listNumber.reduce(function(previousValue, currentValue){
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
},0);
console.log(totalNumber);
//previousValue:giá trị đầu của mảng
//currentValue