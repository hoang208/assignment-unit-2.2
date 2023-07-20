// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a varaible called name and set it to 'Dane' as a string.
// Then we create a conditional statement where if the variable name is equal to the string 'Mary',
// then the console displays the string 'Hi, Mary!'
// Otherwise, the console displays the string 'How do you do?'
// In this case, console should display 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret and a variable called code that is set to 123 as a number.
// Then we define the variable secret as a conditional revolving around the variable called code.
// If code is set to the number 123, then the variable called secret will be set to the string 'super'. At the same time, the variable code will be updated to be set to the number that code is set to mutiplied by two.
// If code is set to a number that is greater than 250, ten the variable secret will be set to the string 'duper'
// We then console.log 'secret' to see what string is set based on the conditional. In this case, the console should display 'super' and te variable code should change to the number 146.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set the variable called isStudent to be a boolean with the value of true. We set the variable called age that is set to 34 as a number. We set the variable called zip that is set to 55407 as a number.
// Then we create a conditional statement that first checks if the value of isStudent is true AND if the value of zip is greater than 80000. If both conditions are satisfied, then the the console displays 'You're a student on the West Coast!`
// If both conditions are no satisfied, then the next conditional is checked in which isStudent is false or age is less than 30. If one of the two conditions is satisfied, then the console displays 'What are your hobbies?'
// If one of the two conditions are not satisfied, then the next conditional is checked in which isStudent is true, then the console displays 'Welcome to Prime'
// If none of the above conditions were met, then the console displays 'How about the weather'
// In this case, the console should display 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX colorOne and colorTwo values are switched so the code should be
// let colorOne = 'blue'; let colorTwo = 'red'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX colorOne and colorTwo should both be set to 'purple' if the condition is true but only colorOne is set to 'purple', line 144 should be c
// colorOne = colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX both conditions should be fufilled to display the message, but the code is only set to if one of the conditions is met. the code should be
// if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX the console.log 'enter' should display if the age is greater than or equal to minAge, yet in this code, it displays 'no entry'. The code should be
//if (minAge > age)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

