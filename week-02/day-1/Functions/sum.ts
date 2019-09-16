// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
let lastNum: number = 5;
function sum(lastNum: number){
    let total = 0;
    for(let i = 0; i <= lastNum; i++){
        total += i;
    }
    return total;
}
console.log(sum(lastNum));