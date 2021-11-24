var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log('I am rectangle')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
        console.log(this)
        this.printProperties()
    },
    printProperties: function() {
        console.log('This is print Propeties')
        console.log('My width is ' + this.width + ' cm')
        console.log('My height is ' + this.height + ' cm')
    }
}

rect.draw()

rect.height = 300
rect.width = 200

rect.draw()

function myFunc() {
    console.log(this) //this is called window object thats means this keyword assosiate window object
}
myFunc()
new myFunc() //this is called empty object because used new keyword. That means  myFunc function assosiate blank or empty object

var another = {
    width: 45,
    height: 96,
    base: 85,
    print: rect.printProperties
}

// console.log(another.print)
another.print()