function firstFunction(){
    console.log("This is first function");
    secondFunction();
}


function secondFunction()
{
    firstFunction();
    console.log("This is second function");
    
}


secondFunction();
// firstFunction();
// secondFunction();