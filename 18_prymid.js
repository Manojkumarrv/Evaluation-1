let n = 3;
let a = "";
let count = 1;
for(let i=1 ; i <= n ; i++){
    for(let b=1 ; b <= n-i ; b++){
        a += " ";
    }
    for(let c=1 ; c <= 2*i-1 ; c++){
        a += count;
        count++;
    }
    a += "\n";
}
console.log(a);


