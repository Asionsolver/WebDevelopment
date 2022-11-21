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

var shape = new shape(); // shape -> Shape -> Object
var sqr = new square(10); // sqr -> Square -> Object

// sqr -> square -> shape -> Object

function circle(){

}

circle.prototype = Object.create(shape.prototype);

var cir = new circle();