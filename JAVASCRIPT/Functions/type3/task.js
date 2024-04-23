//Add Three Number
//Without return, No Param
function addThree()
{
    var a = 10;
    var b = 20;
    var c = 30;
    var result = a+b+c;
    console.log(result);
}

//With Return No param
function addThreeReturn()
{
    var a = 10;
    var b = 20;
    var c = 30;
    var result = a+b+c;
    return result;
}

//Without Return With Param
function addThreeParam(a,b,c)
{
    var result = a+b+c;
    console.log(result);
}

//With Return with param
function addThreeWith(a,b,c)
{
    var result = a+b+c;
    return result;
}

addThree();
var a = addThreeReturn();
console.log(a);
addThreeParam(10,20,30);
var b = addThreeWith(10,20,30);
console.log(b);

