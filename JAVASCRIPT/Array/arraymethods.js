var a = [1,3,4,7,9,67];
// Length of the Array
var len = a.length;
//console.log("length of the above array =>",len);

// Add array values
a[6] = 68;

a.push(89);
a.push(100);
//console.log("PUSH");
for(var i = 0; i<a.length; i++)
{
   // console.log(a[i]);
}

//Remove last value;
//console.log("POP->Remove Last Value");
a.pop();
for(var i = 0; i<a.length; i++)
{
    //console.log(a[i]);
}

//For Each

a.forEach((item,index)=>{
    //console.log(item);
});

//Map
var b = [1,2,3,4,5];

var c = b.map((item)=>{
    return item*2;
});

c.forEach((item,index)=>{
    //console.log(item);
});

//Filter

var d = [10,2,5,8,3,1,67];
var e = d.filter((item)=>item>5);
e.forEach((item,index)=>{
    console.log(item);
});

