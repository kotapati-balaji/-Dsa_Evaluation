// question-1

// let name = "balaji";        
// let age = 22;                
// let isStudent = true;          
// let person = {                 
//   firstName: "balaji",
//   lastName: "chowdary"
// };
// let address; 

// console.log(typeof name); // string
// console.log(typeof age);  // number
// console.log(typeof isStudent); // boolean
// console.log(typeof person); // object
// console.log(typeof address);  // undefined


//question-2

// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");
// num1 = Number(num1);  // Convert the input from string to number
// num2 = Number(num2);
// let sum = num1 + num2;
// alert("The sum is: " + sum);


//question-3

// let counter = 10;
// console.log(counter); //output: 10

// counter +=5;
// console.log(counter); //output:15

// counter -=2;
// console.log(counter); //output:13

// counter *=3;
// console.log(counter); //output:39

// counter /=2;
// console.log(counter); //output: 19.5


//question-4

// let a = 10;
// let b = "10";
//  == 
// console.log(a == b);      // true

// ===
// console.log(a === b);    // false

//  != 
// console.log(a != b);      // false

//  !== 
// console.log(a !== b);    // true

//  > 
// console.log(a > b);        // false

//  <
// console.log(a < b);        // false

//  >=
// console.log(a >= b);      // true

//  <= 
// console.log(a <= b);      // true


//question-5

// let a = true;
// let b = false;
// let c = true;

// (&&)
// console.log(a && c); // true && true => true

// (||)
// console.log(a || b); // true || false => true

//  (!) 
// console.log(!b && a); // !false && true => true && true => true

//question-6

// let number = parseInt(prompt("Enter a number:"));

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }


//question-7

// let x = 5;
// let y = 7;
// console.log("Before swapping:");
// console.log("x =", x);
// console.log("y =", y);


// let temp = x; // Swapping using a third variable
// x = y;
// y = temp;

// console.log("After swapping:");
// console.log("x =", x);
// console.log("y =", y);

//question-8

// let age = parseInt(prompt("Enter your age:"));

// if (age < 18)
//     {
//   console.log("You are a Minor.");
// } else if (age >= 18 && age <= 59) 
//     {
//   console.log("You are an Adult.");
// } else if (age >= 60) 
//     {
//   console.log("You are a Senior.");
// } else 
//     {
//   console.log("Invalid age entered.");
// }

//question-9

//--> console.log("5" == 5);
// output: true

//Explanation:
//The == operator checks for equality, but allows type coercion.
//"5" is a string,and 5 is a number.
//In javascript it will directly converts the string "5" to the number 5 before comparing.
//it becomes 5==5,which is true.

//--> console.log("5" === 5);
//output: False

//Explanation:
//The === operation checks for strick equality ,it compares both value and types
//"5" is a string, and 5 is a number.
//Their types are different(string vs number),the resultis false.

//question-10

// let result = (10 > 5) && (5 < 3) || !(2 == 2);
// console.log(result);

//output: true && false || !true;

//Explanation:
//1)
// (10 > 5) ---> True
// (5 < 3)  ---> False
// (2 == 2) ---> True

//now the results become
// output: true && false || !true;

//2)
// !(Not)operator:
//!true ---> false

//output: true && false || false

//3)
// && operator:
//true && false ---> false

//output: false || false

//4)
// || (or) operator:
//false || false ---> false

//output: false