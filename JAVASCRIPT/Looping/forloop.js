var a = 15;
var result = a%2;
if(result == 0)
{
    console.log("A is even number");
}
else{
    console.log("A is odd number");
}



//2nd Table
// for(var i = 1;i<=10;i++)
// {
//     var result = i*2;
//     console.log(i+"*2="+result);
// }

for(var i = 1;i<=10;i++)
{
    var result = i*3;
    var remainder = result%2;
    if(remainder == 0)
    {
        //console.log(i+"*3="+result);
    }   
}

// 1 to 10
//2 power
// 1 poower 2 = 1
// 2 power 2 = 4
// 3 po 2 = 9

for(var i = 1; i<=10; i++)
{
    var result = 2**i;
    //var result = Math.pow(2,i);
    //console.log(result);
    //console.log(i+" Power 2 ="+result);
}

// for(var i = 1; i<=5; i++)
// {
//     for(var j = 1; j<2; j++)
//     {
//         for(var k = 1; k<2; k++)
//         {
//             console.log("i -"+i);
//         }
//     } 
// }

for(var i = 1; i<=5; i++)
{
    for(var j = 1; j<=i; j++)
    {
        for(var k = i; k<=j; k++)
        {
            console.log(k);
        }
    }
}

// 1
// 1
// 2
// 2
// 3
// 3
//-----------
// 1
// 1
// 2
// 1
// 3
// 1
// 4
// 1
// 5
// 1

// 1
// 2
// 3
// 4
// 5
// 1


