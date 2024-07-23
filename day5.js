// Activity 1
// Task 1

function EvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let num = 4;
let output = EvenOrOdd(num);
console.log(`The number ${num} is ${output}.`); // output :  The number 21 is odd

// Task - 2
function square(num1){
    return num1*num1;
}
let num1 =4;
let output1 = square(num1);
console.log(`Square of the number ${num1} is ${output1}.`); // Output : Square of the number 4 is 16


// Activity - 2
// Task - 3
function maxOfTwoNumbers(a,b){
    return (a>b)?a:b;
}
let a = 3;
let b = 7;
let output3 = maxOfTwoNumbers(a,b);
console.log(` Max of ${a} and ${b} is ${output3}`); // Output : Max of 3 and 7 is 7

// Task - 4
 function conc(str1,str2){
    let result = str1+str2;
    console.log(result); 
 }
 let str1 = "hey, ";
 let str2 = "there";
 conc(str1,str2); // Output : hey, there


//  Activity - 3 

// Task 5
const sum = (c,d) => {
   console.log(c+d); 
};
let c = 4;
let d = 4;
sum(c,d); // Output : 8

// Task 6 
const characterPresent = (str,char) => {
    ;
    console.log(`Is the specific character present - ${str.includes(char)}`);

};
let str= "What! a beautiful day";
let char = "f";
 characterPresent(str,char);   // output: is the specific code present - True


//  Activity 4 

// Task 7 

function multiply(a,b=2){
     console.log(`Multiplication is ${a*b}`);
}
let num2 = 30;
let num3 = 1;
multiply(num2,num3); // Multiplication is 30
multiply(num2); // Multiplication is 60

// Task 8 

function greetingMessage(Name,Age = 20){
    console.log(` ${Name} is ${Age} . `); 
}
let name = "kumkum";
greetingMessage(name);  // kumkum is 20 .

