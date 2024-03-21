var a = 10;
var b = 12;

var c = (a==10) && (a<15);
console.log(c); // False
c = (a!=10) && (b>15);
console.log(c); // false
c = (b<=8) && (b<5);
console.log(c); //False
c = (a>0) && (a > 15);
console.log(c); // false
c = (a==10) && (b>10);
console.log(c); //True
c = (b <= 20) && (a == 10) && (b>100);
console.log(c);

c = (a==10) || (a>15);
//console.log(c);

c = ((a==10) || (a>15)) && (b>50);
console.log(c);


