//O patten program
//  * * *
// *     * 
// *     * 
// *     *
// *     * 
//  * * *

// for(var i=1;i<=6;i++)
// {
//     temp =""
//     for(j=1;j<=6;j++){
//         if(i==1||i==6){
//             if(j==2||j==3||j==4){
//                 temp=temp+"*"
//             }else
//             {
//                 temp=temp+" "
//             }
        
//         }else if(j!=1||j!=6){
//             if(j==1||j==6)
//             {
//                 temp=temp+"*"
//             }else{
//                 temp=temp+" "
//             }
            
//         }
//     }
//     console.log(temp)

// }


// H pattern 
console.log("************* H pattern***********")
for(var i=1;i<=5;i++)
{
    var temp =""
    for(var j=1;j<=5;j++)
    {
        if(i==3)
        {
            temp=temp+"*"
        }
        else if(j==1||j==5)
        {
            temp=temp+"*"
        }
        else
        {
            temp=temp+" "
        }
    }
    console.log(temp)
}