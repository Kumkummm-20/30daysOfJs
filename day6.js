//Task 1
const num1 = [1,2,3,4,5];
console.log(num1);  //Output : [ 1, 2, 3, 4, 5 ]


//Task 2
const name = ["kum","kumm","kummm"];
console.log(`First element : ${name.at(0)}`);
console.log(`Last element : ${name.at(name.length-1)}`);
//Output : First element : kum
//         Last element : kummm


//Task 3
const num2 = [8,9,10,11];
num2.push(20);
console.log("new array : ",num2);
//Output : new array :  [ 8, 9, 10, 11, 20 ]


//Task 4
const num3=[4,7,2];
num3.pop();
console.log("new array : ",num3);
//Output : new array :  [ 4, 7 ]


//Task 5
const fruit = ["Apple","Mango","Orange","Kiwi"];
fruit.shift();
console.log("new array : ",fruit);
//Output : new array :  ["Mango","Orange","Kiwi"]


//Task 6
const num4 = [5,2,6,1];
num4.unshift(1);
console.log("new array : ",num4);
//Output : new array :  [ 1,5, 2, 6, 1 ]


//Task 7
const arr=[1,2,3,4,5,6,7];
const newArray = arr.map((val)=>{
    return val*2;
});
console.log(`New Array : ${newArray}`);
//Output: New Array : 2,4,6,8,10,12,14 


//Task 8
const arr1=[1,2,3,4,5,6,7,8];
const even = arr1.filter((num)=>num%2==0);
console.log(even);
//Output : [2,4,6,8]


//Task 9
const arr2=[1,2,3,4,5,6];
let result = arr2.reduce((sum,val)=>sum+val);
console.log(`Sum of numbers : ${result}`);
//Output : Sum of numbers : 21


//Task 10
const branches = ["CS","IT","AIML","M&C"];
for(let i=0;i<branches.length;i++)
    console.log(branches.at(i));
//Output : CS
//         IT
//         AIML
//         M&C


//Task 11
const colors = ["red","pink","blue","green"];
colors.forEach((val)=>console.log(val));
//Output : red
//         pink
//         blue
//         green


//Task 12
const info = [[2,3,4],[6,5]]; 
console.log(info);
//Output : [[2,3,4],[6,5]]






