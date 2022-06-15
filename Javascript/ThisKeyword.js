// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//     return this.firstName + " " + this.lastName;
//     },
//     // implicit binding
//     getFullName : function() {
//         return this.fullName();
//     }
// };

// console.log(person.getFullName());

// const person1 = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person2 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
//   // explicitly bind the function to person2
//   // Return "John Doe":
//  console.log(person1.fullName.call(person2));


// ! implicit binding


// var printPlayerNameFunction = function(obj) {
//     obj.printPlayerName = function() {
//         console.log(this.name);
//     };
// };

// var ashis = {
//     name: "Ashis",
//     age: "21",
// };

// var asion = {
//     name: "Asion",
//     age: "22",
// };

// printPlayerNameFunction(ashis);
// printPlayerNameFunction(asion);

// ashis.printPlayerName();
// asion.printPlayerName();

// var Person = function(name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function() {
//             console.log("This person name is " + this.name + " and this age is " + this.age);
//         },

//         father: {
//             name: "John",
//             age: "50",
//             printName: function() {
//                 console.log("This person name is " + this.name + " and this age is " + this.age);
//             }
//         }
//     }
// };

// var asion = Person('asion',45);
// asion.printName();

// asion.father.printName();

// ! Explicit(স্পষ্ট) binding

var printName = function(vertu, vertu2, vertu3, vertu4) {
    console.log(`This person name is ${this.name} and this age is ${this.age}. He is a ${vertu}, ${vertu2}, ${vertu3}, ${vertu4} boy.`);
};

var ashis = {
    name: "Ashis",
    age: 21,
};

var vertu = 'Handsome';
var vertu2 = 'Beautiful';
var vertu3 = 'Cool';
var vertu4 = 'Fantastic';

var arr = [vertu, vertu2, vertu3, vertu4]

// printName.call(ashis, vertu, vertu2, vertu3, vertu4);
// printName.apply(ashis, arr);
var print = printName.bind(ashis, vertu, vertu2, vertu3, vertu4); // bind function return a instance of function
print();


