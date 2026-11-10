//find gretest no from given no
var a=10
var b=20
var c=30
if(a>b && a>c){
    console.log("gratest no is a:",a)
}else if(b>a && b>c){
    console.log("gratest no is b:",b)
}else{
    console.log("gratest no is c:",c)
}

//even and odd number
const prompt=require('prompt-sync')();
var value=Number(prompt("enter value"))
if(value%2==0){
    console.log("entered value is even number")
}else{
    console.log("entered value is odd number")
}

//find the given number id divided by 3 and 5
var num=Number(prompt("enter value to check divided by 3 &5:"));
if(num%3==0 && value%5==0){
    console.log("entered value is divisible by both 3 and 5")
} 
else{
 console.log("entered value is not divisible by both 3 and 5")
}
   
