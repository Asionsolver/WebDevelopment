function sqr(x = 2) {
    return x * x;
}

console.log(sqr()); // 4

console.log(sqr(3)); // 9

function greet(name = 'Ashis', msg = 'Hello') {
    console.log(name.length);
    return `${msg} ${name}`;
}

console.log(greet()); // Hello Ashis

console.log(greet('Ashis', 'Hi')); // Hi Ashis

console.log(greet('Ashis')); // Hello Ashis

console.log(greet(undefined, 'Hi')); // Hi Ashis

console.log(greet('Ashis', undefined)); // Hello Ashis

console.log(greet('Ashis', null));