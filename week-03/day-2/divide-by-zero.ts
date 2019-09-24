// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByTen(Parameter: number){
    try {
        if (Parameter == 0) {
            throw 'err'
        } else {
            console.log (10 / Parameter);
        }
    }
    catch (err) {
        console.log('Fail');
    }
}
divideByTen(2);