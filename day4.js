//ACTIVITY 1: FOR LOOP

// TASK 1 

//NUMBER PRINTING SCRIPT                                

for (let i = 1; i <= 10; i++) {   
    console.log(i);
}
/* OUTPUT : 
1
2
3
4
5
6
7
8
9
10
*/

// TASK 2

//MULTIPLICATION TABLE PRINTING SCRIPT

for (let m = 1; m <= 10; m++) {
    console.log(" 5 X ", m, "=", 5 * m);
}
/* OUTPUT :
 
 5 X 1 = 5
 5 X 2 = 10
 5 X 3 = 15
 5 X 4 = 20
 5 X 5 = 25
 5 X 6= 30
 5 X 7 = 35
 5 X 8 = 40
 5 X 9 = 45
 5 X  10 = 50 */


//ACTIVITY 2 

//Task 3

let sum = 0;
const n = 10;
i = 1;
while (i <= 10) {                                
 sum += i; i++;                                         
}

console.log("sum of numbers from 1 to 10 = ", sum);

// Output: sum of numbers from 1 to 10 = 55

//TASK 4 

i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
/*
OUTPUT :
10
9
8
7
6
5
4
3
2
1
*/

//ACTIVITY 3 : DO... WHILE LOOP

// TASK 5 

i = 1;
do {                            
    console.log(i);          
    i++;
}
while (i <= 5); 

/* 
OUTPUT :
 1
 2
 3
 4
 5
*/

//TASK 6

//FACTORIAL CALCULATION SCRIPT

let num = 9;
let factorial = 1;
i = 1;
do {
    factorial = factorial * i;
    i++;
}
while (i <= num);
console.log("Factorial of number ", num, "is ", factorial);

// OUTPUT : Factorial of number  9 is  362880


//ACTIVITY 4 

//task 7 

//PATTERN PRINTING SCRIPT
num = 5;
for (i = 1; i <= num; i++) {
    let str = "* ";
    console.log(str.repeat(i));  
}

/*
OUTPUT : 
*
* *
* * *
* * * *
* * * * *  
*/


//ACTIVITY 5 

//TASK 8 

for (i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
/* OUTPUT :
1
2
3
4
6
7
8
9
10
*/


//TASK 9

for (i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
/* OUTPUT :
  1
  2
  3
  4
  5
  6
  */