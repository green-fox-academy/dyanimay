// -  Create a function called `factorio`
//    that returns it's input's factorial
let factoNumber: number = 4;
function factorio(factonNumber) {
    let result = 1;
    for(let i = 1; i <= factoNumber; i++) {
        result *= i;
    }
    return result;
  }
console.log(factorio(factoNumber));