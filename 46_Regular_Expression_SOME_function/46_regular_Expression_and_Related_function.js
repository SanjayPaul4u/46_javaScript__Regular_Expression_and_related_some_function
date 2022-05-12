console.log("Regular expression and related function.");


let reg = /Sanjay/ // THIS IS CALL REGULAR EXPRESSION.
// reg = /Sanjay/g // HERE G MEANS GLOBAL FLAG,  match all 'Sanjay' in the string
// reg = /sANJAY/i // i MEANS CASE SENSITIVE FLAG

console.log(reg);
// console.log(reg.source);

let string = "This is Sanjay from west bengal, again his name is Sanjay ";

// 1> exec() 📌📌📌-> This function will be return an Array for match or null for not Match.
let result = reg.exec(string);

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }
//     result = reg.exec(string);
// console.log(result);
//     result = reg.exec(string);// WE CAN USE MULTIPLE EXEC() WITH GLOBAL FLAG->g
// console.log(result); 



// 2> test() 📌📌📌-> Returns true and false.
let result2 = reg.test(string);
// console.log(result2); //result2 will be return true if the "reg" is there in the "string". 


// 3> match() 📌📌📌-> Returns array of result or null.
// let result3  = reg.match(string);//---> THIS IS WRONG !
let result3  = string.match(reg);//---> THIS IS RIGHT
// console.log(result3);


// 4> search() 📌📌📌-> Returns index of first match else return -1.
// let result4  = reg.search(string);//---> THIS IS WRONG !
let result4  = string.search(reg);//---> THIS IS RIGHT
// console.log(result4);


// 5> replace() 📌📌📌-> Returns new replaced string with all the replacement (if no flag(g) given then first match will be replace).
let result5 = string.replace(reg, "Ricky");
// console.log(result5);
