// const name = "dharam";
// console.log(name);

// name = "annu"
// console.log(name); // Output : Error!


// let x;      // No Error

// var y;      // No Error

// const z;    // Error! "Missing initializer in const declaration"


const person = {
    name: 'Mayank',
    age: 21
};

console.log(person.name);    // Output: Mayank

// Modifying object properties is allowed
person.name = 'Love';
console.log(person.name);    // Output: Love

// Attempting to reassign the variable will throw an error
person = {};    // Throws TypeError: Assignment to constant variable.


// const numbers = [1, 2, 3];
// console.log(numbers);    // Output: [1, 2, 3]

// // Modifying array elements is allowed
// numbers.push(4);
// console.log(numbers);    // Output: [1, 2, 3, 4]

// // Attempting to reassign the variable will throw an error
// numbers = []; // Throws TypeError: Assignment to constant variable.