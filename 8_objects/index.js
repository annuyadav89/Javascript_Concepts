// let person = {};
// console.log(typeof(person));

let person = {
   name:"annu",
   lastName:"yadav",
   age:21,
   hobbies:["cricket","travel","movies"],
   message:function(){
     console.log("hello everyone this is "+ this.name);
   }
}

// When a function is a property of an object, it is also referred to as a method.
console.log(person);