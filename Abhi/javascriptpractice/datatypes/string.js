var s1="we are learning javascript";
var s2='a'
var s3="abhi"
console.log(s1,typeof(s1))
console.log(s2,typeof(s2))
console.log(s3,typeof(s3))


console.log("******************string methods************************")

// findout the lenght of string
var s4=" I am learning java"
console.log("length of S4:",s4.length)

// find the characters  of mentioned index

console.log(s4[1])

//convert into uppercase
console.log("lower case of i am learning java ")
console.log("in lower case",s4.toLowerCase())
console.log("in upper case :",s4.toUpperCase())


// trim the string
console.log("trim remove space from string")
console.log("  today is monday   ")
var s5="  today is monday   "
console.log("trim string:",s5.trim())
console.log("trim first space:",s5.trimStart())
console.log("trim lastspace:",s5.trimEnd())


//assigment programs
// reverse the string using for loop
var st1="we are learning java script and type script"
var temp=""
for(var i=st1.length;i>=0;i--){
    var temp=temp+st1[i]
    
}
console.log("reversed string:",temp)

//2. write a program to max length word from string.
// var str2="we are learning playwright automation"
// var abc=str2.split(" ")

// console.log(abc)



//3 write a program to get count of all vovels in the string
console.log("count of all vovels in the string")
var str3="abhijit sawant"
var count=0
var res=str3.match(/[aeiou]/gi)?.length || 0;
console.log(res)




