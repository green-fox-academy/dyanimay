// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let matrixSize = 10;
let matrix:number[][] = [];

for (let row = 0; row < matrixSize; row++){
    let rowArray:number[] = [];
    for (let column = 0; column < matrixSize; column++){
        if (row == matrixSize - column -1){
            rowArray.push(1);
        } else {
            rowArray.push(0);
        };
    };
    matrix.push(rowArray);
};
console.log(matrix);