function PrimeNumber(n) {
    for (let i = 2; i < n; i++) { 
      if(n % i === 0) 
      return false; 
    }
    return n > 1; 
  }
  
  console.log(PrimeNumber(1));
  console.log(PrimeNumber(2));  
  console.log(PrimeNumber(9));  
  console.log(PrimeNumber(121)); 