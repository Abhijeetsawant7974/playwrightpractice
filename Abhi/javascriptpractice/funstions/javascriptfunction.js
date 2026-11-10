// function addition(num1,num2){
//     var result=num1+num2
//     console.log("addition of "+num1+" and "+num2+":", result)
// }

// //add two number by provideing value 
// addition(10,20)

// console.log("addition by providing refrence")
// //addition by providing refrence
// var a=10
// var b=20
// addition(a,b)

// //adddition using for
// console.log("adddition using for")
// var temp=2
// for(i=0;i<=10;i++)
// {
//     addition(i,temp)
// }

// //factorial no using function
// console.log("factorial no using function")
// function factorial(n1){
//     var fact =1
//     for(i=n1;i>0;i--){
//         var fact=fact*i
//        // console.log(fact)

//     }
//     return fact
// }

// var result=factorial(5)
// console.log(result)


//assigment
//to find given no is prime or not by using function
// console.log("to find given no is prime or not by using function")

// function primee(num1)
// {
//     for(i=2;i<num1;i++)
//     {
//     if(num1%i==0)
//         {
//         console.log(num1+" is not prime no")
//         }   
    
//     }
//     console.log(num1+" is prime no")
// }

// primee(11)

// //write a for multiplication of 1 to 10 numbers using function
// function multiplication(num1){
//     var total=1
//     for(i=1;i<=num1;i++)
//     {
//         var total=total*i
//     }
//     return total
// }

// var result=multiplication(5)
// console.log(result)



// console.log("******************arrow function************************")


// var abhi=(msg)=>{
//     console.log("hello",msg)
// }

// abhi("abhi sawant")


// function math(a,b,func1){
// var xyz=func1(b)
// console.log(xyz+a)
// }

export function square(b){
    var total= b*b
        return total
}

export function cube(b){
    var total= b*b*b
        return total
}

// math(10,20,square)
// math(10,3,cube)


