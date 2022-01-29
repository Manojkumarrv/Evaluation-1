# Evaluation-1

1.QS

ALGORITHOM:

STEP 1:create a function .

STEP 2:get input from the user.

STEP 3:assign and calculate the values using operators .

STEP 4:increment the values of i++.the value of x should be greater than i becozz i should not get divided by x.

STEP 5:if the condition is satisfied it returns false otherwise the result will be true.

STEP 6:to print the output on the screen.


PSEUDOCODE:

```
BEGIN
FUNCTION PrimeNumber(x) {
    FOR(let i = 2; i < x; i++) { 
      IF(x % i === 0) 
      RETURN false; 
    }
    RETURN x > 1; 
  }
  PRINT
  OUTPUT
  END
  ```

2.QS

ALGORITHM:

STEP 1:get two int from the user.

STEP 2:check both the int are equal.

STEP 3:print output.

PSEUDOCODE:

```
BEGIN 
LET a = 10;
LET b = 10;
CONST ex1 = (a == b);
CONST ex2 = (a === b);
LET c = 5;
LET d = '5';
CONST ex3 = (c == d);
CONST ex4 = (c === d);
PRINT
OUTPUT
```

3.QS

ALGORITHM:

STEP 1:create a function.

STEP 2:get value from the user.

STEP 3:use the FOR loop to decrement the value and print it.

STEP 4:return the function.

STEP 5:print the output.

PSEUDOCODE:

```
FUNCTION String(a) {
    LET newString = "";
    FOR (LET i = a.LENGTH - 1; i >= 0; i--) {
        newString += a[i];
    }
    PRINT
}
RETURN
OUTPUT
```
4.QS

ALGORITHM:

STEP 1:create a function .

STEP 2:get the value from user.

STEP 3:split,reverse,join the value .

STEP 4:create a function.

STEP 5:print it then return the value.

STEP 6:print the output.

PSEUDOCODE:

```
FUNCTION String(a) {
    VAR split= a.SPLIT(" "); 
    VAR reverse = split.REVERSE(); 
    VAR join = reverse.JOIN(" "); 
    RETURN join; 
}
 
PRINT
LET reverse = FUNCTION (a) {
 RETURN a.SPLIT(" ").REVERSE().JOIN(" ")};

PRINT
OUTPUT
```
5.QS

ALGORITHM:

STEP 1:get value from the user.

STEP 2:split,reverse and join the value.

STEP 3:use if and else statement to print the value if the condition is ok or not.

STEP 4:print the output.

PSEUDOCODE:

```
LET s = "civic";
LET sReverse = s.SPLIT("").REVERSE().JOIN("");

IF(s === sReverse) {
  PRINT
} ELSE {
  PRINT
}
OUTPUT
```
6.QS

ALGORITHM:

STEP 1:get value from user and form an array.

STEP 2:use map function to modify the array.

STEP 3:print the output.

STEP 4:get value from the uer to form an array.

STEP 5:use foreach method.

STEP 6:print the output.

PSEUDOCODE:

```
LET a = [1,2,3,4,5,6];
LET b = a.MAP(a => a*2);
PRINT

LET forest = ['animals','birds','trees','reptiles','insects'];

forest.FOREACH(forest => { PRINT
});
OUTPUT
```

7.QS

ALGORITHM:

STEP 1:get values from the user.

STEP 2:floor function returns the largest integer less than or equal to a given number.

STEP 3:use ramdom function to choose a random number.

STEP 4:print the output.

PSEUDOCODE:

```

PRINT(Math.FLOOR((Math.RANDOM()*5)+1));

OUTPUT

```

8.QS

ALGORITHM:

STEP 1:create a function. get values from the user.

STEP 2:use filter function to filter the reccomended values .

STEP 3:use indexof function to search the entire calling value and returns it. 

STEP 4:print the output


PSEUDOCODE:

```
FUNCTION kumar(a) {
    RETURN a.filter((element, index) => a.indexOf(element) === index);
  }
  
  CONST a = [1,2,9,4,5,8,3,5,1,4,5];
  PRINT
  
  OUTPUT
  ```
  
9.QS

ALGORITHM:

STEP 1:get values from the user.

STEP 2:use for loop to increment the values in integer and sum it.

STEP 3:print the output. 

PSEUDOCODE:

```
LET count = 0;
FOR(LET i=1;i<=10;i++)
{
    count += i;
}
PRINT

OUTPUT
```

10.QS

ALGORITHM:

STEP 1:create a function.

STEP 2:get value from the user.

STEP 3:use for loop to sum the values.

STEP 4:if and else statement specifies the condition and returns the value to sum odd and even.

STEP 5:print the output.

PSEUDOCODE:

```
CONST a = FUNCTION(n){
    LET b = 0;
    LET d = 0;
    FOR(LET i=0; i <= n; i++){
        IF(i%2 == 0){
            b = b + i;
        }
        ELSE{
            d = d +i;
        }
    }
    PRINT
};
RETURN

```

11.QS

ALGORITHM:

STEP 1:get values from the user.

STEP 2:to merge it use spread method.

STEP 3:print the output.

PSEUDOCODE:

```
LET = (a = [1,2,9,3,5,1,4,5], b= [11,54,70,40]);
PRINT

OUTPUT
```

12.QS

ALGORITHM:

STEP 1:create an array and get values from the user.

STEP 2:assign an variable and use arrow function and create a specified space to assin some values in it.

STEP 3:use has to returns a boolean indicating whether an element with the specified key exists or not.

STEP 4:print the output

PSEUDOCODE:


```
LET d = NEW Set();
    LET array = [
        {id: 1, name: 'Stephen covey'},
        {id: 2, name: 'Robin Sharma' }, 
        {id: 3, name: 'Tolstoy'}, 
        {id: 3, name: 'Tolstoy'}, 
        {id: 5, name: 'James clear'}
    ];
    VAR filtered = array.FILTER(value => {
      LET a = d.HAS(value.id);
      d.ADD(value.id);
      LET b = d.HAS(value.name);
      d.ADD(value.name);
      RETURN
    });
    PRINT
    
    OUTPUT
    ```
    
    
13.QS

ALGORITHM:

PSEUDOCODE:



LET a={id: 1, name: "edison"};
LET b={id: 1, name: "edison"};
LET c={id: 1, name: "edison"};
LET d={id: 2, name: "edison"};
FUNCTION obj(A,B){
    LET c=Object.GETOWNPROPERTYBYNAMES(A);
    LET d=Object.GETOWNPROPERTYBYNAMES(B);
    IF(c.length!=d.length)
      RETURN
    FOR(let i=0;i<c.length;i++){
         LET name=c[i];
          IF(A[name]!==B[name])
           RETURN
     } 
     RETURN
}
PRINT

OUTPUT



14.QS

ALGORITHM:

PSEUDOCODE:


LET array = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
array.FLAT();
PRINT

OUTPUT


15.QS
ALGORITHM:

PSEUDOCODE:


LET array = [{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}];
LET a = array.reduce((key,value) => {
    key[value.id] = key[value.id] + 1 || 1;
RETURN
},{});
PRINT

OUTPUT


16.QS
ALGORITHM:

PSEUDOCODE:


LET n = 5;
LET a = "";
FOR(LET i=0;i<=n;i++){
    FOR(LET b=0;b<i;b++){
         a += "*";
    }
    a += "\n";
}
PRINT

OUTPUT


17.QS
ALGORITHM:

PSEUDOCODE:

LET n = 5;
LET a = "";
LET count = 1;
FOR(LET i=1;i<=n;i++){
    FOR(LET b=1;b<=i;b++){
        a += count;
        count++;
    }
    a += "\n";
}
PRINT

OUTPUT

18.QS
ALGORITHM:

PSEUDOCODE:

LET n = 3;
LET a = "";
LET count = 1;
FOR(LET i=1 ; i <= n ; i++){
    FOR(LET b=1 ; b <= n-i ; b++){
        a += " ";
    }
    FOR(LET c=1 ; c <= 2*i-1 ; c++){
        a += count;
        count++;
    }
    a += "\n";
}
PRINT

OUTPUT

19.QS
ALGORITHM:

PSEUDOCODE:

LET n = 5;
LET a = "";
FOR (LET i = 1; i <= n; i++) {
  FOR (LET b = n; b > i; b--) {
    a += " ";
  }
  FOR (let c = 0; c < i * 2 - 1; c++) {
    a += "*";
  }
  a += "\n";
}
FOR (LET i = 1; i <= n - 1; i++) {
  FOR (LET b = 0; b < i; b++) {
    a += " ";
  }
  FOR (LET c = (n - i) * 2 - 1; c > 0; c--) {
    a += "*";
  }
  a += "\n";
}
PRINT

OUTPUT

20.QS
ALGORITHM:

PSEUDOCODE:

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









