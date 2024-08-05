const sayMyName = (name) =>
{
    //console.log("My Name is Kavi");
    console.log(`My Name is ${name}`);
} 

const sayMyDob = (age) =>{
    console.log(`My age is ${age}`);
}

//If you want to export single function, use below
//module.exports = sayMyName;
//module.exports = sayMyDob;

//If you wan to export multiple function, use below

module.exports = {
    "myName":"Manibharathi",
    "myTech":"Java",
    "sayMyName":sayMyName,
    "sayMyDob":sayMyDob
}