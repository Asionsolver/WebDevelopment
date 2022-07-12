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

// const a = {
//     name:"Bangladesh",
//     city:"Dhaka",
// }

// const s = "Belgium is not bad country."
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
// console.log(s.slice(5,10));
// console.log(s.slice(5));

/*
!Note
* JavaScript counts positions from zero.

* First position is 0.

* Second position is 1.

? If a parameter is negative, the position is counted from the end of the string.

**This example slices out a portion of a string from position -12 to position -6:

*/
let str = "Apple, Banana, Kiwi";
// let part = str.slice(-12, -6);
// console.log(part);

// let part_2 = str.slice(2, -6);
// console.log(part_2);

// let part_3 = str.slice(-5, -12); //return nothing
// console.log(part_3);

// ! If you omit the second parameter, the method will slice out the rest of the string

// let part2 = str.slice(7);
// console.log(part2);

// ! JavaScript String substring()
//substring() is similar to slice().

// ? The difference is that start and end values less than 0 are treated as 0 in substring(). That means that Substring() can not accept negative indexes.


// let part_s1 = str.substring(7, 13);
// console.log(part_s1);

// If you omit the second parameter, substring() will slice out the rest of the string.

// const part_s2 = str.substring(7);
// console.log(part_s2);

// ! JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.
// If you omit the second parameter, substr() will slice out the rest of the string.

// const part_sb1 = str.substr(7, 6);
const part_sb1 = str.substr(7);
console.log(part_sb1);

