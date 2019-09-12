let a: number = 3;
// make it bigger by 10

console.log(a + 10);

let b: number = 100;
// make it smaller by 7

console.log(b - 7);

let c: number = 44;
// double c's value

console.log(c + c);

let d: number = 125;
// divide d's value by 5

console.log(d / 5);

let e: number = 8;
// what's the cube of e's value?

console.log(e * e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
let bigger: boolean = f1 > f2;
console.log(bigger);

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
let bigger2: boolean = g2*2 > g1;
console.log(bigger2);

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
let succES: boolean = (h % 11) == 0; 
console.log(succES);

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
let squared: boolean = i1 > i2**2;
let cubed: boolean = i1 < i2**3;
console.log(squared && cubed);

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
let three: boolean = j % 3 == 0;
let five: boolean = j % 5 == 0;
console.log(three || five);