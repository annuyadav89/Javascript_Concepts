// let day = 2;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;

//     case 2:
//         console.log("tuesday");
//         break;

//     case 3:
//         console.log("wednesday")
//         break;

//     case 4:
//         console.log("thursday")
//         break;

//     case 5:
//         console.log("friday")
//         break;

//     case 6:
//         console.log("saturday")
//         break;

//     case 7:
//         console.log("sunday");
// }

// The default case does not have to be the last case in a switch block:
// If default is not the last case in the switch block, remember to end the default case with a break.

let day = 88;
switch (day) {
    default :
    console.log("sunday");
    break;

    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday")
        break;

    case 4:
        console.log("thursday")
        break;

    case 5:
        console.log("friday")
        break;

    case 6:
        console.log("saturday")
        break;  
}

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.