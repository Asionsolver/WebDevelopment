// ! The values are written as name:value pairs.(name is the key and value is the value, name and value are separated by a colon (:))
let car ={
    name: "Ford",
    year: 2018,
    color: "red",
    model:500,
    price: 5000000,
    weight: 1000,

    start: function(){
        console.log("Car started");
    },
    stop: function(){
        console.log("Car stopped");
    },

    drive: function(){
        console.log("Car is driving");
    }
};

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

/*

In the example above, this refers to the person object.

I.E. this.firstName means the firstName property of this.

I.E. this.firstName means the firstName property of person.

*/

console.log(car.color);
console.log(car["color"]);
car.start();