 var a = [1,2,3,4,5];

 var b = [43543,45,"324",true];
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


//console.log(myTech.length);

for(var i = 0; i<myTech.length;i++)
 {
    //console.log(myTech[i]);
 }

 //Sum of the Array
 var data= [3,5,7,12,89,56];

 //console.log(data);
 var sum = 0;
 for(var i = 0; i<data.length;i++)
 {
    sum = sum+data[i];
 }
 //console.log(sum);

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
 //console.log(eSum);

 // Reverse the array

 //I/p [10,20,30,40,50]
 //O/P 50,40,30,20,10

 var c = [10,20,50,40,50];
 console.log(c[5]);
 var d = 100;
 var total = 0;
 for(var i = 0; i <100;i++)
 {
      if(c[i] != undefined)
      {
         total++;
      }
      else{
         break; // It stops current loop execution and return
      }
 }
 console.log(total);

 var i = 0;
 var total = 0;
 while(c[i] != undefined)
 {
   total++;
   i++;
 }
 console.log(total);




//  var len = c.length;
//  for(var i = len-1;i>=0;i--)
//  {
//    console.log(c[i]);
//  }







