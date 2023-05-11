function testMe() {
    console.log(this);
}

testMe(); // Window

let obj = {
    testMe: 'testMe',
    testMe2: function() {
        console.log(this);
    }
};

obj.testMe2(); // obj