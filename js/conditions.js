nameFun(10)

function nameFun(x) {
    if (x < 20) {
        console.log("X IS LESS THAN 20")
    } else {
        console.log("X IS not LESS THAN 20")
    }
}

// let nameFun = function (x) {
//     if (x < 20) {
//         console.log("X IS LESS THAN 20")
//     } else {
//         console.log("X IS not LESS THAN 20")
//     }
// }

//Truthy and Falsy values

//falsy values: "", 0, null, undefined, false
//Truthy values: 
//1 - any string except blank without space,
//2 - any number except 0
//3 - any object
// - any value 

if ("") {
    console.log("X IS LESS THAN 20")
} else {
    console.log("X IS not LESS THAN 20")
}
//Only one block having condition true will be checked by the compiler rest will not be checked
// if(){

// }else if(){

// }else if(){

// }else{}
// =======================
//all blocks condition will be checked, if true executed
// if(){

// }
// if(){

// }
// if(){

// }


// function getResult(marksPer) {
//     if (marksPer < 33) {
//         return "Fail"
//     } else if ((marksPer >= 33) && (marksPer < 45)) {
//         return "Third"
//     } else if ((marksPer >= 45) && (marksPer < 60)) {
//         return "Second"
//     } else if ((marksPer >= 60)) {
//         return "First"
//     }

// }

function getResult(marksPer) {
    if (marksPer < 33) {
        return "Fail"
    } else if ((marksPer >= 33)) {
        if (marksPer < 45) {
            return "Third"
        }
    } else if ((marksPer >= 45) && (marksPer < 60)) {
        return "Second"
    } else if ((marksPer >= 60)) {
        return "First"
    }

}
// if(cond1 || cond2 || cond3){

// }

let result = getResult(44)
console.log(result)
let y = "company";
let x = (y === "company") ? 10 : 20;
console.log(x);



