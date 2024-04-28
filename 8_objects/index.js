// let person = {};
// console.log(typeof(person));

// ==========================================================================================================

// let person = {
//    name:"annu",
//    lastName:"yadav",
//    age:21,
//    hobbies:["cricket","travel","movies"],
//    message:function(){
//      console.log("hello everyone this is "+ this.name);
//    }
// }

// // When a function is a property of an object, it is also referred to as a method.
// console.log(person);

// ==================================================================================================================

// const person = new Object();
// console.log(person);

// person.firstName = "dharam";
// person.lastName = "yadav";
// person.age = 2;
// person.toys = ["baby voice","guitar","laptop","snake","cat"]
// person.playing = function(){
//   console.log("he is not playing more than 2 days with the same toy");
// }

// console.log(person);
// person.toys[5] = "panda"
// console.log(person);

// ======================================================================================================================

// const person = {
//   name:"dharam",
//   age:2,
//   gender:"boy"
// }
// console.log(person);

// const person2 = Object.create(person);
// person2.age = 5;
// person2.name = "gullu"
// console.log(person2);

// ===============================================================================================================================

// function person(){
//   return{
//     name:"dharam",
//     age:2,
//     gender:"boy"
//   }
// }

// console.log(person);

// const person2 = person();

// console.log(person2);



// function createPerson(fName, lName, age, hobbies){

//   return {
//       firstName : fName,
//       lastName : lName,
//       age : age,
//       hobbies : ["sleeping", "writing", "playing"]
//   }
// }

// let person = createPerson("Love", "Babbar", 24);

// console.log(person);

//  ========================================================================================================


const person = {
  name : "dharam",
  age : 2,
  toys:["panda","snake","dancing police car"]
}

console.log(person["name"]);
console.log(person.name);


const person2 = {
  "1Name" : "dharmishth",
  age : 2,
  toys:["panda","snake","dancing police car"]
}

console.log(person2["1Name"]);
// console.log(person2.1Name); // "we cannot use Dot Notation when the property name or method of an object contains special characters, space or starts with a number".

//  ==========================================================================================================