
let a={id: 1, name: "edison"};
let b={id: 1, name: "edison"};
let c={id: 1, name: "edison"};
let d={id: 2, name: "edison"};
function obj(A,B){
    let c=Object.getOwnPropertyNames(A);
    let d=Object.getOwnPropertyNames(B);
    if(c.length!=d.length)
      return false;
    for(let i=0;i<c.length;i++){
         let name=c[i];
         if(A[name]!==B[name])
           return false;
     } 
     return true;
}
console.log(obj(a,b)); 
console.log(obj(c,d)); 






