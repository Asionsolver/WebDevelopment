let arr = [1,2,3,4,5]

for (let value of arr) {
    console.log(value);
}

let str ='Ashis';

for(let value of str){
    console.log(value)
}

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

// for(let value of obj){
    // console.log(value)
// } 




// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())