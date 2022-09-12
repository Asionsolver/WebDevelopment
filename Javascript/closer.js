// Closures
/* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. */

// function name() {
//     var x = 45
//     return function() {
//         console.log(x) //x called closer
//     }

// }

// var abc = name()
// console.dir(abc)

// Simple function

// var sum = function(num1, num2){
//     return num1 + num2;
// }

// console.log(sum(2,3));

// var num1 = 2;
// var num2 = 3;

// var sum = function(num1, num2){
//     return num1 + num2;
// }

// console.dir(sum());

// var sum = function(num1, num2){
//     return function(){
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);

// var num1 = 3;

// var sum = function(num1, num2){
//     var num2 = 2;
//     return function(){
//         return num1 + num2;
//     }
// }

// var myFunc = sum();

// console.dir(myFunc);





