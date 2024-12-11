
// 1. Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

var num = 3.45214;
document.write(`number: ${num} <br>`);
var round = Math.round(num);
document.write(`round of value: ${round} <br>`);
var floor = Math.floor(num);
document.write(`floor value: ${floor} <br>`);
var ceil = Math.ceil(num);
document.write(`ceil value: ${ceil}`);

document.write("<hr>");

// 2. Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number


var num = -2.673;
document.write(`number: ${num} <br>`);
var round = Math.round(num);
document.write(`round of value: ${round} <br>`);
var floor = Math.floor(num);
document.write(`floor value: ${floor} <br>`);
var ceil = Math.ceil(num);
document.write(`ceil value: ${ceil}`);

document.write("<hr>");


// 3. Write a program that displays the absolute value of a number.
//  E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = -4;
var abs = Math.abs(num);
document.write(`The absolute value of ${num} is ${abs}`);
document.write("<hr>");


// 4. Write a program that simulates a dice using random() method of JS Math class.
//  Display the value of dice in your browser.:

var num = Math.floor(Math.random()* 6)+ 1;
document.write(`random dice value: ${num} <br>`);

var number = Math.floor(Math.random()* 6)+ 1;
document.write(`random dice value: ${number} <br>`);
document.write("<hr>");


// 5. Write a program that simulates a coin toss using random() method of JS Math class.
//  Display the value of coin in your browser

var num = Math.floor(Math.random()* 2)+ 1;
document.write(num + "<br>");
if(num === 1){
    document.write(`random coin value: Tails <br>`);
}
else {
    document.write(`random coin value: Heads <br>`);
}
var number = Math.floor(Math.random()* 2)+ 1;
document.write(number + "<br>");
if(number === 1){
    document.write(`random coin value: Tails`);
}
else {
    document.write(`random coin value: Heads`);
}
document.write("<hr>");

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var num = Math.floor(Math.random() * 100) + 1;
document.write(`random number between 1 and 100: ${num}`);
document.write("<hr>");


// 7. Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms

var user = prompt("Enter your weight in kilograms.");
user = user.replace(/[^0-9.]/g, "").trim();
var weightUser = +user;
document.write(`the weight of user is: ${user} kilograms`);
document.write("<hr>");


// 8. Write a program that stores a random secret number from 1 to 10 in a variable.
//  Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.

var secretNum = Math.floor(Math.random() * 10)+ 1;
var user = +prompt("Guess the secret number (between 1 and 10):");

if (secretNum === user){
    alert("Congratulations! You guessed the right number.");
}
else if (isNaN(user)){
    alert("Please enter a number like (1,2,3....)");
}
else{
    alert(`Sorry, the secret number was ${secretNum}. Try again!`);
}