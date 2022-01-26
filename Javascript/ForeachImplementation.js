var arr = [1, 5, 3, 6, 8]

sum = 0
arr.forEach(function(value, index,arr){
    // console.log(value, index,arr)
    sum += value
})

console.log(sum)

// 1st step

// function forEach(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// forEach(arr)

// 2nd step
// function forEach(arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// function forEach(arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// var sum = 0;

// forEach(arr, function(value, index, arr) {
//     console.log(value, index, arr)
//     sum += value
// })
// console.log(sum)

