//With Return, No Parameter
function getMyNumber()
{
    console.log("Get My Number is called");
    return "Kavi";
}

function addTwoNumber()
{
    var a = 10;
    var b = 12;
    var c = a+b;
    return c;
}

function subTwoNumber()
{
    var a = 100;
    var b = 35;
    //var c = a-b;
    return a-b;
}

var a = getMyNumber();
console.log("A is ",a);

var result = addTwoNumber();
console.log("Result is",result);

result = subTwoNumber();
console.log("Result is",result);