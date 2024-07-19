// Activity 1 

var x = 10 ;
console.log(x);   //Output : 10
let y = "kumkumm"; 
console.log(y); //Output : kumkumm


// activity 2 

const a = true;
console.log(a); //Output : true


// activity 3

let b = 2;
let c = "kumm";
let d = false;
let e = {car:"Fiat"};
const f = ["kumm", "3", 46];
console.log(typeof(b));   //Output : number
console.log(typeof(c));   //Output : string 
console.log(typeof(d));   //Output : boolean
console.log(typeof(e));   //Output : object
console.log(typeof(f));   //Output : object(array in js)


// activity 4 

let m = 5;
console.log(m);    //Output :5
m = 7;
console.log(m);   //Output : 7


//activity 5 

const p = 10 ;
console.log(p);   //Output : 10
//p = 15;
//console.log(p);    // uncommenting these lines will cause an error.



// Feature Requests :
// 1.

let num = 56;
let str = "string";
let bool = true;
let obj = { name: "kumm" };
let arr = [1, 2, 3, 4];
let nil = null;

console.log("Value: ", num, "  Type: ", typeof num);
// Output: Value:56 , Type: number

console.log("Value: ", str, ", Type: ", typeof str);
// Output: Value: string, Type: string

console.log("Value: ", bool, ", Type: ", typeof bool);
// Output: Value: true, Type: boolean

console.log("Value: ", obj, ", Type: ", typeof obj);
// Output: Value:{ name: 'kumm' }, Type: object

console.log("Value: ", arr, ", Type: ", typeof arr);
// Output: Value:[ 1, 2, 3, 4 ] , Type: object (Arrays are object in JavaScript)

console.log("Value: ", nil, ", Type: ", typeof null);
// Output: Value: null, Type: object 


// 2

let letvar = " to be reassign";
console.log(letvar); // Output: to be reassign
letvar = " reassigned";
console.log(letvar); // Output: reassigned

const constVar = "cant reassign";
console.log(constVar); // Output: cant reassigned

// constVar = "not reassigned ";
// console.log(constVar);      // uncommenting these lines will cause an error.