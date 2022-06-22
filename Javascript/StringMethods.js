// var a = 'I am '
// var b = 'Asion'

// var c = a.concat(b)
    // var d = c.substring(5)
    // var e = c.substring(5, 3) //return m
    // var f = c.substr(5, 3) //return Asi

// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(c.charAt(5))
// console.log(c.startsWith('I am'))
// console.log(c.endsWith('I am'))
// console.log(c.endsWith('Asion'))
// console.log(a.toUpperCase())
// console.log(a.toLowerCase())
// console.log('      Asion          '.trim())
// console.log(c.split(' '))

const a = {
    name:"Bangladesh",
    city:"Dhaka",
}

const s = "Belgium is not bad country."
// console.log(s.length)

/*

Extracting String Parts
There are 3 methods for extracting a part of a string:

1. slice(start, end)
2. substring(start, end)
3. substr(start, length)

*/


// ? Slice Method

/*
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).
*/
console.log(s.slice(5,10));
