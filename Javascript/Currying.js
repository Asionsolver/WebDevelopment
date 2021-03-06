function add(a, b, c) {
    return a + b + c
}

// add(45,6,98)

function currying(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

var result = currying(5)(7)(8)

console.log(result)  //result = 20