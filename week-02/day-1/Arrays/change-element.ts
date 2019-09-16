// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
let numList:number [] = [1, 2, 3, 8, 5, 6];
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
numList = numList.map(function(a){
    return a[3]=4;
});
console.log(numList[3]);