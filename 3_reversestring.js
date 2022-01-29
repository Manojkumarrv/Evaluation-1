// console.log(reverse("manojkumar"));

// //and also be reversed using for loop


function String(a) {
    let newString = "";
    for (let i = a.length - 1; i >= 0; i--) {
        newString += a[i];
    }
    console.log(newString);
}
String('manojkumar');


// function String(s){
//     return s.split("").reverse().join("");
// }
// String("manojkumar");


