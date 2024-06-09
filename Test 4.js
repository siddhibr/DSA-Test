// JS-test-4
// Question 1:

// Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.

// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.

// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.

// Question 4:

// Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array.

// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 7 characters.

// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.

// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.

// Question 8:

// Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.

// Question 9:

// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase), numbers, and special characters.

// Question 10:

// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array.


// Answers
// Q.1
// for (var i = 0; i <= 20; i++) {
//     if (i === 10) {
//       continue; 
//     }
//     if (i % 2 === 0) {
//       console.log(i); 
//     }
//   }
  
//   Q.3
// function EvenNumbers(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 === 0) {
//         sum += numbers[i];
//       }
//     }
//     return sum;
//   }
  
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const result =EvenNumbers(array);
//   console.log(`Sum of even numbers: ${result}`);
  


// Q.7
// function DivisibleBy3_5_7(limit) {
//     var sum = 0;
//     for (var i = 1; i <= limit; i++) {
//       if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   const limit = 1000;
//   const result = DivisibleBy3_5_7(limit);
//   console.log(`The sum of all numbers from 1 to ${limit} that are divisible by 3, 5, or 7 is: ${result}`);
  

// Q.8
// function reverseString(str) {
//     var reversedStr = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }
//     return reversedStr;
//   }
  

//   const inputString = "Welcome";
//   const reversedString = reverseString(inputString);
//   console.log(`Original string: ${inputString}`);
//   console.log(`Reversed string: ${reversedString}`);
  