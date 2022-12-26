// ! "I will call back later!"

// ! A callback is a function passed as an argument to another function

// ! This technique allows a function to call another function

// ! A callback function can run after another function has finished


function myDisplay(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplay(result);