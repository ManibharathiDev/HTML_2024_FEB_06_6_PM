// I need two number addition

// var a = 5;
// var b = 10;

// var c = a+b;
// console.log(c);

// a = 15;
// b = 25;
// c = a+b;

// console.log(c);

// a = 25;
// b = 45;
// c = a+b;

// console.log(c);

//Function declare / Function is a unit of program
function addTwoNumber() // Called Function
{
    var a = 10;
    var b = 15;
    var c = a+b;
    console.log(c);

    for(var i = 0; i<5; i++)
    {
        console.log(i);
    }
}

function subTwoNumbers()
{
    var a = 10;
    var b = 15;
    var c = a-b;
    console.log(c);
}

function printName()
{
    console.log("My name is Kavin");
}

addTwoNumber();  //Calling Function
addTwoNumber();

printName();

subTwoNumbers();