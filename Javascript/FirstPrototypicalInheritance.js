function shape(){

}

shape.prototype = {
    common: function(){
        console.log("I am a Method");
    }
}

function square(width){
    this.width = width;
}

square.prototype = Object.create(shape.prototype);

square.prototype.draw = function(){
    console.log('I am a Draw Method');
}

var shape = new shape();
var sqr = new square(10);

// sqr -> square -> shape -> Object
