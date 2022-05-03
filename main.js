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

var Integer = Number(
  prompt("insert an integer negative number and positive number")
);

if (Integer > 0) {
  alert(" positive number");
} else if (Integer < 0) {
  alert(" negative number");
} else {
  alert(" equal number");
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

// ------------------------------------------------------------------------

/* 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to
that’s number
Example Input 5
Output 1, 2, 3, 4, 5
*/

for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// ------------------------------------------------------------------------


/*  10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
Example
Input: 5
Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
*/

var Multiple = Number(prompt("print a multiplication table up to 12."));

for (var i = 1; i <= 12; i++) {
  var Result = i * Multiple;

  console.log(`${Multiple}*${i}=${Result}`);
}

// ------------------------------------------------------------------------

/*  11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers
between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14
*/

for (var i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// ------------------------------------------------------------------------

/* 12- Writeaprogramthattaketwointegersthenprintthepower
Example:
Input: 4 3
Output: 64
Hint how to calculate 4^3 = 4 * 4 * 4 =64
*/

var power = Math.pow(4, 3);
console.log(power);

// ------------------------------------------------------------------------

/* 13-Write a program to input month number and print number of days in that
month.
*/

var getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(1, 2022));
console.log(getDaysInMonth(2, 20122));
console.log(getDaysInMonth(4, 2022));
console.log(getDaysInMonth(12, 2022));

// ------------------------------------------------------------------------

/*  14- Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F
*/

var Physics = Number(prompt("Enter marks of Physics "));
var Chemistry = Number(prompt("Enter marks of Chemistry"));
var Biology = Number(prompt("Enter marks of Biology "));
var Mathematics = Number(prompt("Enter marks of Mathematics "));
var Computer = Number(prompt("Enter marks of Computer "));

var total = Physics + Chemistry + Biology + Mathematics + Computer;
var percentage = total / 5.0;
console.log(total, percentage);

if (percentage >= 90) {
  console.log(" Grad A");
} else if (percentage >= 80) {
  console.log(" Grad B");
} else if (percentage >= 70) {
  console.log(" Grad C");
} else if (percentage >= 60) {
  console.log(" Grad D");
} else if (percentage >= 40) {
  console.log(" Grad E");
} else {
  console.log(" Grad F");
}

// ******************************** Using switch case*******************************

/*   15- Write a program to print total number of days in month*/

var day = prompt("enter a month number please");
var month = "";

switch (day) {
  case 1:
    month = "january";
    break;
  case 2:
    month = "Febraury";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}

// ------------------------------------------------------------------------

/*16-  Write a program to check whether an alphabet is vowel or consonant */

var char = prompt(" enter vowel chars ");

switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log("vowel");
    break;
  default:
    console.log(" consonant");
}

// ------------------------------------------------------------------------

/* 17- Write a program to find maximum between two numbers*/

var numOne = 10;
var numTwo = 20;

switch (true) {
  case numOne > numTwo:
    console.log(`Bigger number is ${numOne}`);
    break;
  case numOne < numTwo:
    console.log(`Bigger number is ${numTwo}`);
    break;
  case numOne === numTwo:
    console.log(`${numOne} is equal to ${numTwo}`);
    break;
  default:
    console.log(false, " Something went wrong");
}

// ------------------------------------------------------------------------

/* 18- Write a program to check whether a number is even or odd*/

var evenOdd = Number(prompt("check whether a number is even or odd"));

switch (evenOdd % 2) {
  case 0:
    console.log("even");
    break;
  default:
    console.log("odd");
}

// ------------------------------------------------------------------------

/* 19- Write a program to check whether a number is positive or negative or zero*/

var num = Number(
  prompt("check whether a number is positive or negative or zero")
);

switch (num) {
  case 0:
    alert("Zero");
    break;
  case num > 0:
    alert("positive");
    break;
  case num < 0:
    alert("negative");
    break;
  default:
    alert("Try Again");
}

// ------------------------------------------------------------------------

/* 20- Write a program to create Simple Calculator
 */

var number1 = Number(prompt("Enter first number: "));
var operator = prompt("Enter operator (  + || - || * || / ) ");
var number2 = Number(prompt("Enter second number: "));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

// ------------------------------------------------------------------------
