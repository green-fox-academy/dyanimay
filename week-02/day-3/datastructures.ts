let numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers[2]);
	
let x: number = 26;
let y: number = 40;
let index: number = x - y * y * x - y / x;
console.log(numbers[-100]);
	
//strings
	
let text: string = 'It\'s Tomi\'s idea\n'
console.log(text);
console.log(text);
	
let tabbed: string = "Hi\tCsumi\tCso";
console.log(tabbed);
	
let hello: string = "Hello";
let rapgod: string = "Rapgod";
	
console.log(hello.concat(" ").concat(rapgod));
console.log(hello + " " + rapgod);
	
//indexof
if(rapgod.indexOf("god") != -1){
    console.log(":)");
}else{
    console.log(":(");
}

//replace
let asd: string = "hello rapgod szia rapgod";
console.log(asd.replace("rapgod", "rapgodess"));
console.log(asd.replace(/rapgod/g , "rapgodess"));

//arrays
let array: string[] = ["rapgod", "zigzag", "accord"];
console.log(array);

for(let i: number = 0; i < array.length; ++i){
    console.log(array[i]);
}

function print(text: string){
    console.log("print: " + text);
}

array.forEach(print);

array.forEach(function(element){	    console.log("anonymus: " + element);
});	
array.forEach(element => console.log("lambda: " + element));
	
let array2: string[] = ["hello", "szia", "szevasz"];
let resultArray = array2.map(function(element, index){
    if(element != "szia"){
        return element + " Rapgod" + (index + 1).toString();
    }
}).filter(function(element){
    return element != undefined;
})

console.log(array2);
console.log(resultArray);
	
//objects
	
let person = {
    name: "Joe",
    age: 42,
    friends: ["Cait", "Lucas"],
    greeting: function(value: number){console.log("Hello world! " + value.toString());},
    favoriteObjects: {
        color: "black",
        size: 15
    }
}

console.log(person);
console.log(person.name);
person.greeting(5);
	
console.log(Object.keys(person));
let values = Object.keys(person).map(function(element){
    return person[element];
});
	
console.log(values);
	
let key: string = "name"
console.log(person[key]);
console.log(person.favoriteObjects.color);
	
person["height"] = 180;
console.log(person["height"]);
	
console.log("---------------------------");
let generalText: string = "iuouosodiusioudofousitttttt";
	
function mostChar(text: string): string{
    let characterOccurence = {}
    for(let i: number = 0; i < text.length; ++i){ 
        if(characterOccurence.hasOwnProperty(text.charAt(i))){
            characterOccurence[text.charAt(i)] += 1;
        }else{
            characterOccurence[text.charAt(i)] = 1;
        }
    }

    console.log(characterOccurence);
	
let max: number = 0;
let maxKey: string = "";
    Object.keys(characterOccurence).forEach(function(element){
    if(characterOccurence[element] >= max){
      max = characterOccurence[element];
            maxKey = element;
        }
    })
	
    return maxKey;
}
	
console.log("Most occured character: " + mostChar(generalText));
	
console.log("---------------------")
	
let array3: number[] = [1, 2, 3, 4, 5, 6, 7];
function countEven(array: number[]): number{
    let counter: number = 0;
    for(let i: number = 0; i < array.length; ++i){
        if(array[i] % 2 == 0){
            ++counter;
        }
    }

    return counter;
}
	
console.log("Even numbers: " + countEven(array3)); 