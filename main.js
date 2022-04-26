 /* 1- Write a program that allow to user enter number then print it
Example
Input: 5
Output: 5 
*/

 var num = Number(prompt("enter your number"));
document.getElementById("demo").innerHTML = "Enter your Number :" + " " + num;



// ------------------------------------------------------------------------




/* 2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
Example1
Input: 12 Output Yes
Example 2
Input: 9 Output No
*/

 var numUser = Number(prompt("number can divide by 3 and 4 otherwise"));
if (numUser % 3 == 0 && numUser % 4 == 0) {
  alert("Yes");
} else {
  alert("No");
}



// ------------------------------------------------------------------------




 /*  3- Write a program that allows the user to insert 2 integers then print the max
Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10
*/

  var x = Number(prompt("First Number"));
var y = Number(prompt("Secont Number"));

  if (x > y) {
  console.log("x is max");
} else if (y > x) {
  console.log("y is max");
} else {
  console.log("try again");
}


// ------------------------------------------------------------------------



/*  4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.
Example 1
Input: -5
Output negative
Example2
Input: 10
Output positive
*/

 var Integer= Number(prompt('insert an integer negative number and positive number'))

if(Integer>0){
    alert(' positive number')
}
else if (Integer<0){
    alert(' negative number')
}
else{
    alert(' equal number')
}


// ------------------------------------------------------------------------

/* 5- Write a program that take 3 integers from user then print the max element
and the min element.
Example 1
Input:7,8,5
Output:
max element = 8
min element = 5
*/
// max number
 var firstNum = Number(prompt("First Number"));
var secondNum = Number(prompt("Second Number"));
var thirdNum = Number(prompt("Third Number"));

if (firstNum > secondNum && firstNum > thirdNum) {
  alert("firstNum is max");
} else if (secondNum > firstNum && secondNum > thirdNum) {
  alert("secondNum is max");
} else if (thirdNum > firstNum && thirdNum > secondNum) {
  alert("thirdNum is max");
} else {
  alert("try again");
}
// ------------------------------------------------------------------------
// min number
var firstOutput = Number(prompt("First Number"));
var secondOutput = Number(prompt("Second Number"));
var thirdOutput = Number(prompt("Third Number"));

if (firstNum < secondNum && firstNum < thirdNum) {
  alert("firstNum is min");
} else if (secondNum < firstNum && secondNum < thirdNum) {
  alert("secondNum is min");
} else if (thirdNum < firstNum && thirdNum < secondNum) {
  alert("thirdNum is min");
} else {
  alert("try again");
}

// ------------------------------------------------------------------------

/* 6- Write a program that allows the user to insert integer number then
check If a number is oven or odd
7- Example 1
Input: 8
Output: even
Example 2
Input: 7
Output: odd
*/

 var evenOdd = Number(prompt("insert integer number is oven or odd"));

if (evenOdd % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}




// ------------------------------------------------------------------------

/* 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output: Consonant
*/

 var char = prompt(" enter vowel chars ");

if (
  char == "a" ||
  char == "e" ||
  char == "i" ||
  char == "o" ||
  char == "u" ||
  char == "A" ||
  char == "E" ||
  char == "I" ||
  char == "O" ||
  char == "U"
) {
  alert("vowel");
} else {
  alert("Consonant");
}

