

function kumar(a) {
    return a.filter((element, index) => a.indexOf(element) === index);
  }
  
  const a = [1,2,9,4,5,8,3,5,1,4,5];
  kumar(a) ;