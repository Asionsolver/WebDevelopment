// function testMe() {
//     console.log(this);
// }

// testMe(); // Window

// let obj = {
//     testMe: 'testMe',
//     testMe2: function() {
//         console.log(this);
//     }
// };

// obj.testMe2(); // obj

// let obj = {
//     testMe: 'testMe',
//     print: () => {
//         console.log(this);
//     }
// };

// obj.print();


let obj2 = {
    name: 'Ashis',
    print: function () {
        console.log(this.name); // Ashis
        setTimeout(function () {
            console.log(`Hello ${this.name}`);
        }, 1000);
    }
};

obj2.print(); // Hello undefined