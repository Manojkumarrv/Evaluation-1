const a = function(n){
    let b = 0;
    let d = 0;
    for(let i=0; i <= n; i++){
        if(i%2 == 0){
            b = b + i;
        }
        else{
            d = d +i;
        }
    }
    console.log("even number:" ,b);
    console.log("odd number:", d);
};

a(100);