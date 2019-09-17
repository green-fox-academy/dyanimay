//Create an empty list which will contain names (strings)
let names: string [] = [];
//Print out the number of elements in the list
console.log(names);
//Add William to the list
names.push('William');
//Print out whether the list is empty or not
if (names.length === 0){
    console.log('Empty');
}   else {
    console.log('Not Empty');
};
//Add John to the list
//Add Amanda to the list
names.push('John', 'Amanda');
//Print out the number of elements in the list
console.log(names);
//Print out the 3rd element
console.log(names[2]);
//Iterate through the list and print out each name
//William
//John
//Amanda
names.forEach(printList);
function printList(names: string){
    console.log(names)
};
/* OR
for (let list = 0; list < names.length; list++) {
    console.log(names[list]);
}
*/
//Iterate through the list and print
//1. William
//2. John
//3. Amanda
for (let list = 0; list < names.length; list++) {
    console.log((list+1) + '. ' + names[list]);
}
//OR names.forEach(value => console.log(names.indexOf(value) + 1 + '. ' + value));

//Remove the 2nd element
names = names.filter(function(name){
    return (name != 'John');
})
for (let whatever = 0; whatever < names.length; whatever++) {
    console.log(names[whatever]);
}
//Iterate through the list in a reversed order and print out each name
//Amanda
//William
for (let switch = 0; switch < names.length; switch++) {
    console.log(names.reverse[switch];
}
//Remove all elements
names.splice(0);
console.log(names);
