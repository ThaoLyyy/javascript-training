// bài1: Đảo một chuỗi. ví dụ:"My name is Ly " -> "Ly is name My";
function reverseString(str) {
    if (!str) return null;
    //split(" ");
    //["My"], ["name"],["is"],["Ly"]
    // const arrStr = str.split(" ");
    // const reverseString = arrStr.reverse().join(" ");
    //chaining methods(phương thức nối liền )
    // console.log(reverseString);
    return str.split(" ").reverse().join(" ");
}
console.log(reverseString("My name is Ly"));
// [1,2,3,4,5].reverse()-> [5,4,3,2,1]
// bài2: Đảo một chuỗi bao gồm các kí tự . ví dụ:"i love " -> "evol i";
function reverseWord(str) {
    if (!str) return null;
    const arrStr = str
    .split(" ")
    .map(item => item.split("").reverse().join(""))//["i","love"]
    .reverse()
    .join(" ");
    console.log(arrStr);
}
reverseWord("i love");
//3: In hoa  chữ cái đầu trong 1 chuỗi chữ ví dụ:" my name is ly" => "My Name Is Ly"

function capitalizeWord(word = "") {
    if(word.length === 0) return null;
    //Convert to lower case first
    let newWord = word.toLowerCase().charAt(0).toUpperCase();
    // charAt(index)
    //Ly-> L y
    //hello -> slice(0, 3); ->hel
    //hello -> slice(0); -> ello
    //slice(strartIndex, endIndex - 1)
    let otherWord = word.toLowerCase().slice(1);
    console.log(otherWord);
    return `${newWord}${otherWord}`;

}
function capitalizeStr(str) {
    if (!str) return null;
    // str.split(" ").map(item => capitalizeWord(item)).join(" ")
    const result = str
    .split(" ")
    .map(item => capitalizeWord(item))
    .join(" ");
    console.log(result);
}
capitalizeStr("my name is ly");
