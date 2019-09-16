// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`
let numListReverse: number[] = [3, 4, 5, 6, 7];
numListReverse.reverse();
console.log(numListReverse);

//Second solution
let numListReverse2: number[] = [3, 4, 5, 6, 7, 8];
for(let i=0; i <= Math.floor((numListReverse2.length-1) / 2); i++){
    let Temporary = numListReverse2[i];
    numListReverse2[i] = numListReverse2[numListReverse2.length - 1 - i];
    numListReverse2[numListReverse2.length - 1 - i] = Temporary;
}
console.log(numListReverse2);