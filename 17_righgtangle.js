let n = 5;
let a = "";
let count = 1;
for(let i=1;i<=n;i++){
    for(let b=1;b<=i;b++){
        a += count;
        count++;
    }
    a += "\n";
}
console.log(a);