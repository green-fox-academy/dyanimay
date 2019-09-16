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
let matrixSize = 6;
let matrix:number[] = [];

for (let row = 0; row < matrixSize; row++){
    for (let column = 0; column < matrixSize; column++){
        if (row == matrixSize - column -1){
            matrix.push(1);
        } else {
            matrix.push(0);
        };
    };
    console.log(matrix.join(' '));
    matrix = [];
};