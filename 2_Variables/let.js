// let a  = 10;

// // block-scope
// if(true){
//     let b = 20;
//     console.log(a);  // output 10;
//     console.log(b);  // output 20
// }

// console.log(a);  // output 10
// console.log(b);  // Throws ReferenceError: y is not defined


// re-assignment

let name = "dharam";
name = "annu"

console.log(name);

{
    name = "dharmishth"
    console.log(name)
}

// re-defined

// let age = 21;
// console.log(age);

// {
//     let age = 20;
//     console.log(age);
// }

// let age = 30;  // throws error
// console.log(age);