//Higher Order Funtion

function add(a, b) {
    return a + b
}
// 5. We can pass function as an arguments 

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    function multiply() {
        var m = func(a, b)
        return m * c * d
    }

    return multiply
}

var multiply = manipulate(9, 4, add)
console.log(multiply)
console.log(multiply())

// 6. We can return function from another functon

function addition(a, b, func) {
    var c = a + b
    var d = a - b

    return function() {
        var m = func(a, b)
        return m - c - d
    }
}

var returnFunc = addition(9, 4, add)
console.log(returnFunc)
console.log(returnFunc())