

let s = "civic";
let sReverse = s.split("").reverse().join("");

if (s === sReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}
