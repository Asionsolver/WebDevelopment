// function myFunction() {
     // console.log(this)
//     console.log(this.a + this.b)
// }

 // myFunction()
// myFunction.call({ a: 10, b: 20 });

function myFunction(c, d) {
    // console.log(this)
    console.log(this.a + this.b + c + d)
}

// myFunction()
// myFunction.call({ a: 10, b: 20 }, 30, 40);
myFunction.apply({ a: 15, b: 25 }, [30, 40]);