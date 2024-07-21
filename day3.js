// activity 1 : if else statements

//task 1 :
 let num = 0 ;
 if(num>0){
    console.log("number is positive");
 } else if(num==0){
    console.log("number is zero");
 }else if(num<0){
    console.log("number is negative");
 } // output : number is zero
 
 //task 2 
  let age= 19 ;
  if(age>=18){
    console.log("eligible to vote");
  } else if(age<18){
    console.log(" not eligible to vote");
  }   // output : eligible to vote


  // activity 2 : Nested if else statements

  //task 3
  let num1= 5 , num2 = 9 , num3=10;
if(num1>num2 && num1>num3){
    console.log("num1 = 5 is the greatest number"); 
}else if(num2>num1 && num2>num3){
    console.log("num2 = 9 is the greatest number"); 
} else if(num3>num2 && num3>num1){
    console.log("num3 = 10 is the greatest number"); 
}    // output : num3 = 10 is the greatest number


//activity 3 : switch case 

//task 4 
let day = 5 ;
switch(day){
    case 1 :
        console.log("It's Monday");
        break;
        case 2 :
        console.log("It's Tuesday");
        break;
        case 3 :
        console.log("It's Wednesday");
        break;
        case 4 :
        console.log("It's Thursday");
        break;
        case 5 :
        console.log("It's Friday");
         break;
        case 6 :
        console.log("It's Saturday");
        break;
        case 7 :
        console.log("It's sunday");
        break;
}

//task 5 
let score = 6;
switch (score) {  
    case (10):
    case (9):
        console.log("A");
        break;
    case (8):
        console.log("B");
        break;
    case (7):
        console.log("C");
        break;
    case (6):
        console.log("D");
        break;
    default:
        console.log("F");
}
   //output: D


   //Activity 4 : 

//Task 6
let num4 = 20;  //output: even 
let check = (num % 2 == 0) ? console.log("even") : console.log("Odd");
//output: even


//activity 5:

//Task 7
let year = 1800;  
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
    console.log("Leap Year");
}
else{
    console.log("Not a leap year");
}  //output: Not a leap year



// Feature Requests

// 1
 let number1 = -3;
    if (number1 > 0) {
        console.log("Positive");
    } else if (number1 < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }  // output : negative
 
// 2
 let age1 = 15;
    if (age1 >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }    // Output:  Not eligible to vote


// 3
let day1 = 2;
    switch (day1) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }   // Output: Tuesday

// 4
let score1 = 75;
    switch (true) {
        case (score1 >= 90):
            console.log(Grade = 'A');
            break;
        case (score1 >= 80):
            console.log(Grade = 'B');
            break;
        case (score1 >= 70):
            console.log(Grade = 'C');
            break;
        case (score1 >= 60):
            console.log(Grade = 'D');
            break;
        case (score1 < 60):
            console.log(Grade = 'F');
            break;
        
}   // Output:  Grade = C

// 5
let year1 = 1900;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
// Output: Not a leap year

//done day 3 