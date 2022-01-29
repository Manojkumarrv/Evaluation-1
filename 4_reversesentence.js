// function String(s){
//     return s.split("").reverse().join("");
// }
// String("hi my name is kumar");


function String(a) {
    var split= a.split(" "); 
    var reverse = split.reverse(); 
    var join = reverse.join(" "); 
    return join; 
}
 
console.log(String("hi my name  is kumar"));
let reverse = function (a) {
 return a.split(" ").reverse().join(" ")};

console.log(reverse("kumar is my name"));