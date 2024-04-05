 var a = [1,2,3,4,5];
 //console.log(a);
 var myTech = ["Java","CPP","JS","Node JS",5,6,7,5,4,3,4,6,
"Oops"];
//  console.log(myTech[0]);
//  console.log(myTech[1]);
//  console.log(myTech[2]);
//  console.log(myTech[3]);
//  console.log(myTech[4]);

//  myTech[3] = "Mongo DB";
//  console.log(myTech[3]);

//  var myTech = ["Java",3,"JS",5.6];
//  console.log(myTech);

//  for(var i = 0; i<4;i++)
//  {
//     console.log(myTech[i]);
//  }


console.log(myTech.length);

for(var i = 0; i<myTech.length;i++)
 {
    console.log(myTech[i]);
 }

 //Sum of the Array
 var data= [3,5,7,12,89,56];

 console.log(data);
 var sum = 0;
 for(var i = 0; i<data.length;i++)
 {
    sum = sum+data[i];
 }
 console.log(sum);

 //Sum of array even numbers
 //[2,5,3,8,10,45,78]

 var eSum  = 0;
 for(var i = 0; i< data.length; i++)
 {
    var mod = data[i]%2;
    if(mod == 0)
    {
        eSum = eSum + data[i];
    }
 }
 console.log(eSum);





