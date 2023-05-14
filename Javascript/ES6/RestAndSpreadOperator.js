// calculate sum of all arguments passed to a function in normal way

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
    
}

// console.log(sum(1, 2, 3, 4, 5));


// calculate sum of all arguments passed to a function in Rest operator way

function sum(...rest){
    return rest.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));
