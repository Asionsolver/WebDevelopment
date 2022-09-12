function square(width){
    this.width = width;

    // this.draw = function(){
    // console.log('Draw');   
    // }
}
//constructor prototype
square.prototype={
    
    draw:function(){ 
        console.log('Draw');
    },

    toString:function(){
        return 'My width is '+this.width;
    }
}

var sqr1 = new square(10);
var sqr2 = new square(5);  //this will create two objects/instance.

