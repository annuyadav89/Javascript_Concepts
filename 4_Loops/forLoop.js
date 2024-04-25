// A for loop is constituted with four parts: the initialization, the condition, increment/decrement 
// and the code which has to be executed if the conditions are met true.
// The "for" loop in JavaScript allows us to execute a block of code repeatedly until a specified condition is met. 
// It's particularly useful when we know how many times you want to iterate.


// for (initialization; condition; increment/decrement) {
//     // code block to be executed
// }


// for(let i= 1; i<5;i++){
//     console.log(i);
// }

// for(let i = 5; i>0;i--){
//     console.log(i);
// }

// for(let i = 5; i>0;i--){
    
//     if(i==3){
//         console.log("stopped  i = 3");
//         break;
//     }else{
//         console.log("not get i =3 till now");
//     }
// }

for(let i = 5; i>0;i--){
    
    if(i==3){
        console.log("it will skipped i = 3 and continue after 3");
        continue;
    }else{
        console.log(i);
       
    }
}