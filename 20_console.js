console.log("hi");//prints whatever given inside it. 
console.dir("");//its the way to see all the specified properties of an program.
let a = "kumar";
console.count(a);//it counts how many times it has been executed.

console.table(["hi","im","kumar"]);//displays the output in form of table.
console.time("hi");// starts the timer.
console.timeLog("hi");// calculates the time from console.time.
console.timeEnd("hi");// ends the timer.


function fo() {
    function ba() {
      console.trace();
    }
    ba();
  }
  
  fo();//the following trace will be displayed.


console.log("hi");
console.group();//make an inlie group.
console.log("Level 2");
console.group();
console.log("Level 3");
console.groupEnd();//ends an inline group 



const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
    console.log('the # is ' + number);
    console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg});}
    //writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

