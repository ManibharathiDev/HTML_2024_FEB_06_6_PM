var a = 98;

// A : >95
// B : >85 && <=95
// C : >75 && <=85
// D : >65 && <=75
// E : >50 && <=65

if(a>95)
{
    console.log("A GRADE");
    if(a >= 98)
    {
        console.log("A Grade with Distinction");
    }
}
else if(a>85 && a<=95)
{
    console.log("B GRADE");
}
else if(a>75 && a<=85)
{
    console.log("C Grade");
}
else if(a>65 && a<=75)
{
    console.log("D Grade");
}
else if(a>=50 && a<=65)
{
    console.log("E Grade");
}
else{
    console.log("RA");
}
