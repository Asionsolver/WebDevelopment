const obj ={
    start: 1,
    end:5,
    [Symbol.iterator]: function* (){
        let currentValue = this.start;
        while(currentValue <= this.end){
            yield currentValue++;
        }
    }
}
