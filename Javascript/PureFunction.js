/* 

What is Functional Programming ?
==> Functional programming is a programming paradigm - a style of building the structure and elements of computer programs that threats computation as the evalution of mathematicalfunction and avoids changing - state and mutable Data. 

Three main terms
        1.Pure Funtion
        2.First class Funtion
        3.Higher Order Funtion


        *********** Funciton acts like as value ***********

*/

/*
Pure Funtion
1. It return the same result if given the same arguments.
2. It does not cause any observable side effects.
*/

function sqr(n) {
    return n * n
}

console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

var n = 10

function change() {
    n = 100
}
change() //not a pure function because change n variable value
console.log(n)

var point = { a: 123, b: 43 }

function pinpoint(point) {
    point.a = 45
    point.b = 56
    console.log(point)
}

pinpoint(point) //not a pure function because change point object variable value
console.log(point)