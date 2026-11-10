// to print 1 20 no using for loop
// console.log("hello")
// var i;
// for(var i=0;i<=20;i++){
//     console.log(i)
// }


// console.log("**progarm for program to get all even number from 10-20")

// console.log("even no from 10 to 20")
// for(var i=10;i<=20;i++){
    
//     if(i%2==0){
//         console.log(i)
//     }
// }

//************************************************************************** */

//write fabonacci series

// console.log("*******write fabonacci series*******")
// var a=0;
// var temp;
// for(var i=0;i<5;i++)
// {
// console.log(a)
// temp=a+1;
// a=temp

// }

//************************************************************************ */

// console.log("*******write a program to factorial no*******")
// var num=10;
// var total
// for(var i=num-1;i>0;i--){
//     total=num*i
//     num=total
    
// }
// console.log(num)

//********************************************************************** */

// // write a program from patten 
// var num=5;
// for(i=1;i<num;i++)
// {
//     row=''
//     for(j=1;j<=i;j++)
//     {
//        row +='* '
//     }
//     console.log(row) 
// }
// //O/P
// // * 
// // * * 
// // * * * 
// // * * * * 

//***************************************************************************** */

// var num=5
// for (i=num;i>=1;i--){
//     var row=''
//     for(j=1;j<=i;j++)
//     {
//         row +='*'
//     }
//     console.log(row)
// }
// for(i=2;i<=num;i++)
// {
//     row=''
//     for(j=1;j<=i;j++)
//     {
//        row +='*'
//     }
//     console.log(row) 
// }


console.log("*****T pattern program")

var num=5

for(var i=1;i<=num;i++)   
{
        var temp=''
    for(var j=1;j<=num;j++)
    {
        if(i==1){
            temp=temp+" * " 
        }
        else if(i!=1){
            if(j==3){
                temp=temp+" * "
               
            }else{
                temp=temp+"   "
                
            }
        }
        
    }
      console.log(temp)

    
} 
