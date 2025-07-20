// question-1

// they are seven types:
// <-- string 
// example: let string = "hello word!"

// <-- number
// exmaple: let num = 4231

// <-- Boolean
// example: let boolean = true

// <-- undefined
// example: let a; // undefined

//<-- null
//example: let a = null;

//<-- symbol
//example: let symbol= "id"

//<-- bigint
//example: let bigint= 123456678899


// question-2

// ->var
//1) function-scoped

// example:
// var name = "balaji"
// console.log(Name);
// Name = "chowdary"
// console.log("updated"; Name);

//-> let
// 1)block-scoped

// example:
// let age = 25;
// console.log(age);
// age = 26;
// console.log(age);

//->const
// 1)block-scoped(like let)

// example:
// const name = "Hi,balaji";
// console.log(name);

//question-3
// undefined: a varaible has been declared but has not been assigned a value
// null: a varaible is explicity set to "no value" or "empty"

// question-4
// let x = 10;
// let y = "10";
// console.log(x == y);
// console.log(x === y);

// output:
// true
// false
// explanation
// ->This uses the double equals (==) operator, which performs type coercion.It converts the string "10" to the number 10 before comparing.
// ->This uses the triple equals (===) operator, which checks for strict equality no type conversion is done.

// question-5

// const PI = 5.14;
// PI = 5.14159;
// It is used to declare a variable that cannot be reassigned once it has been given a value and this make the variable read-only after the inital assignment.


// question-6

// In the typeof operator is used to find out what type of value a variable holds. In example the variable name contains "Balaji" which is a string,so typeof name gives "string".
// let name = "Balaji";
// console.log(typeof name);  // output:"string"


// question-7

// In JavaScript, an object is a collection of key-value pairs and it is used to store related (data) and (functionality)
// Example:
// let person = {
//   name: "Balaji",
//   age: 23,
// };
// console.log(person.name);     
// console.log(person["age"]);   

// question-8

// -> arrays: use arrays when you need am ordered list of items
// example:
//let vegetables = ["Carrot", "Tomato", "Potato", "Spinach"];
// console.log(vegetables[0]); // Output: "Carrot"

//-> object: use object when you need to store date with named keys.
//example:
// let person={
// name:"Balaji";
// age:22;
// };
// console.log(personalbar.name);

//question-9

//leta;
//console.log(a); undefined
//console.log(typeof a); "undefined"

//question-10

// let studentName = "Balaji";     
// let studentAge = 20;            
// let isPassed = true;            
// console.log("Name: " + studentName);
// console.log("Age: " + studentAge);
// console.log("Passed: " + isPassed);