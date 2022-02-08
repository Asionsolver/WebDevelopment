// function test() {
//     console.log('some things')
// }

// var rect5 = new Function('width', 'height', `this.width = width 
//         this.height = height

//         this.draw = function() {
//             console.log('I am rectangle')
//             console.log('My width is ' + this.width + ' cm')
//             console.log('My height is ' + this.height + ' cm')
//             console.log(this)
//             this.printProperties()
//         }
//         this.printProperties = function() {
//             console.log('This is print Properties')
//             console.log('My width is ' + this.width + ' cm')
//             console.log('My height is ' + this.height + ' cm')
//         }`)

// var rect6 = new rect5(4, 5)
// console.log(rect6)


// function myFun(){
//     console.log(this)
//     console.log(this.a + this.b)
// }

// myFun ()
// myFun.call({})
// myFun.call({a:45, b:45})

// function myFun(c,d){
//     console.log(this)
//     console.log(this.a + this.b + c + d)
// }

// myFun.call({a:45, b:45}, 10, 5)
// myFun.apply({a:45, b:45}, 10, 5)  //error

// function myFun(){
//     console.log(this)
//     console.log(this.a + this.b)
// }

// myFun.call({a:45, b:45},10,5)
// myFun.apply({a:45, b:45},[10,5]) //function argument passed by array

function myFun(){
    console.log(this)
    console.log(this.a + this.b)
}
// var test = myFun.bind({a:45, b:45},10,5)
// test()
var test = myFun.bind({a:45, b:45})

test(10,5)
