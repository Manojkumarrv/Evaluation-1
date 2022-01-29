let n = 5;
let a = "";
for (let i = 1; i <= n; i++) {
  for (let b = n; b > i; b--) {
    a += " ";
  }
  for (let c = 0; c < i * 2 - 1; c++) {
    a += "*";
  }
  a += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let b = 0; b < i; b++) {
    a += " ";
  }
  for (let c = (n - i) * 2 - 1; c > 0; c--) {
    a += "*";
  }
  a += "\n";
}
console.log(a);