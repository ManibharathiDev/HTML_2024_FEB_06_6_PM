var a = 10;

var b = [13,56,67,90];
console.log(b);

for(var i = 0; i < b.length; i++)
{
    console.log(b[i]);
}

console.log(b[0]);

b[4] = 89;

console.log(b[4]);


console.log(b[9]); // Undefined

var k = [];
k.push(89);
k.push("Test");
k.push(4);
for(var i = 0; i < k.length;i++)
{
    console.log(k[i]);
}

console.log("Length of an array =>",k.length);
console.log(k);
k.length = 2;
console.log("Length of an array =>",k.length);
console.log(k);

let data = [];
data.push("1","2","3","4","5","6");
data.forEach((item,index)=>{
    console.log(item,index);
})

let names = [];
names.push("Manibharathi","Saravanan","Maya","Vimala","Amitha","Sangeetha");

const result = names.filter((word)=>word.length<16);
console.log(result);

let maths = [];
maths.push(4,5,6,7,8,9,10);
let mathResult = maths.map((data)=>data*2);

console.log(mathResult);

console.log(maths.reverse());

let datas = [45,6,23];

// const sortedValues = datas.toSorted((a, b) => a - b);
const sortedValues = datas.toSorted((a, b) => sort(a,b));
console.log(sortedValues);

function sort(a,b){
    return a-b;
}
