// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
drinks.forEach(function(duplicate){
    duplicate += duplicate;
    console.log(duplicate);
});
