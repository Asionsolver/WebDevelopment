function name() {
    var x = 45
    return function() {
        console.log(x) //x called closer
    }

}

var abc = name()
console.dir(abc)