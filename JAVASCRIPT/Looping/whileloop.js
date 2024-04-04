// for(var i = 1; i<=10;i++)
// {
//     console.log(i);
// }

var i = 1;
while(i<=10)
{
    //console.log(i);
    i++;
}

//Sum of N Numbers;

var n = 5;
var k = 1;
var sum = 0;
while(k<=n) //1<=5 //2<=5 //3<=5 // 4<=5 //5<=5 // 6<=5
{
    sum = sum+k; // sum = 0+1 = 1; sum = 1+2 = 3; sum = 3+3 = 6; sum= 6+4 = 10; sum = 10+5 = 15
    k++; //k = k+1 .1+1 = 2; ; k=2+1 = 3; k= 3+1=4; k=4+1 = 5; k= 5+1 = 6
}
console.log(sum);

// Sum of N Even Numbers
var n = 10;
var k = 0;
var sum = 0;
while(k<=n) //1<=5 //2<=5 //3<=5 // 4<=5 //5<=5 // 6<=5
{
    sum = sum+k; // sum = 0+1 = 1; sum = 1+2 = 3; sum = 3+3 = 6; sum= 6+4 = 10; sum = 10+5 = 15
    k = k+2; //k = k+1 .1+1 = 2; ; k=2+1 = 3; k= 3+1=4; k=4+1 = 5; k= 5+1 = 6
}
console.log("Sum of Even Number is",sum);

// Sum of N Odd Numbers
var n = 10;
var k = 1;
var sum = 0;
while(k<=n) //1<=5 //2<=5 //3<=5 // 4<=5 //5<=5 // 6<=5
{
    sum = sum+k; // sum = 0+1 = 1; sum = 1+2 = 3; sum = 3+3 = 6; sum= 6+4 = 10; sum = 10+5 = 15
    k = k+2; //k = k+1 .1+1 = 2; ; k=2+1 = 3; k= 3+1=4; k=4+1 = 5; k= 5+1 = 6
}
console.log("Sum of Odd Number is",sum);