var a = 10;

var c;

c = (a>10)?"Equal"
:"Not Equal";

console.log(c);

(a>10)?console.log("A is equal to 10")
:console.log("A is not equal to 10");

// Find greatest number between two number

a = 10;
b = 12;
(a>b)?console.log("A"):console.log("B");

//Find greatest number between three number

a = 12;
b = 5;
c = 56;

((a>b)&&(a>c))?
console.log("A")
:(b>c)?console.log("B"):console.log("C");