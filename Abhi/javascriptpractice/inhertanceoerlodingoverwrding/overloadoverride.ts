class abc{
    add(a:number,b:number){
        console.log("sum of two numbers is "+(a+b));
    }
    // add(a:number,b:number,c:number){
    //     console.log("sum of three numbers is "+(a+b+c));
    // }
}
class xyz extends abc{
    add(a:number,b:number){
        console.log("substraction of two numbers is "+(a-b));
    }
}
console.log("parent class method calling");
let obj1 = new abc();
obj1.add(10,20);
console.log("child class method calling");
let obj2 = new xyz();
obj2.add(10,20);