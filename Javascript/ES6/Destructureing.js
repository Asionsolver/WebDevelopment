let person = {
    name: "Tobi",
    age: 20,
    section: "SS3",
    roll: 20,
    address: {
        street: "No 1, CodeSweetly Street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria"
    }
}

// let name = person.name;
// let age = person.age;

let {name, age, section, roll, address:{state, street, city, country}} = person;

console.log(name, age, section, roll, state, street, city, country);