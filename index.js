// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

// Input: [1, 2, 3, 4, 5]

// Question 2:
// Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

// Input: "madam"

// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

// Input: [1, 2, 3, 4], [3, 4, 5, 6]

// Question 4:
// Create a JavaScript function that takes an object and a key as input, and returns the value associated with that key in the object. If the key does not exist, return a default value.

// Input: {name: "Alice", age: 25}, "name"

// Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.

// Input: 12345

// Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").

// Input: "hello"

// Question 7:
// Write a JavaScript function that takes an array of objects and a key, and returns an array containing the values associated with that key from each object.

// Input: [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}], "name"

// Question 8:
// Create a JavaScript function that takes a sentence as input and returns the number of words in the sentence.

// Input: "This is a sample sentence."

// Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// Input: [10, 2, 14, 5, 7]

// Question 10:
// Create a JavaScript function that takes a date object and returns a formatted string in the format "YYYY-MM-DD".

// Input: new Date(2024, 4, 15)


// Answers:-
// Question 1:
// Write a JavaScript function that takes an array of numbers as input and returns a new array with each number squared.

// const numbers = [1, 2, 3, 4, 5];
// function squareNumbers(numbers) {
//     return numbers.map(num => num * num);
//   } 
//   console.log(squareNumbers(numbers));


// // Question 2:
// // Create a JavaScript function that checks if a given string is a palindrome (reads the same forwards and backwards).

// var myName = "madam"
// function isStringPalindrome(string) {
//     for (var i = 0; i < Math.floor(string.length / 2); i++) { 
//         console.log(string[i], string[string.length - 1 - i])
//         if (string[i] !== string[string.length - 1 - i]) {
//             return "Not palindrome"
//         }
//     }
//     return "Its a Palindrome"
// }
// console.log(isStringPalindrome(myName))


// / Question 5:
// Write a JavaScript function that takes a number as input and returns an array of its digits.
// const input = 12345;
// function Digits(number) {
//     return number.toString().split('').map(Number);
// }
// const digits = Digits(input);
// console.log(digits);

// / Question 6:
// Create a JavaScript function that takes a string as input and returns a new string with each character duplicated (e.g., "hello" becomes "hheelllloo").
const input = "hello";
function duplicateCharacters(input) {
    return input.split('').map(char => char + char).join('');
}
const duplicatedString = duplicateCharacters(input);
console.log(duplicatedString); 

// / Question 9:
// Write a JavaScript function that takes an array of numbers and returns the second smallest number in the array.

// Question 3:
// Write a JavaScript function that takes two arrays as input and returns a new array that contains only the elements that are present in both arrays (intersection).

// Input: [1, 2, 3, 4], [3, 4, 5, 6]
array1=[1,2,3,4];
array2=[3,4,5,6];

array3=[]

function commonElement(array1,array2){
    for(var i=0;i<array1.length;i++){

        for(var j=0;j<array2.length;j++){

            if(array1[i]===array2[j]){

                array3.push(array1[i])
            }
        }
    }
    return array3
}

const array4=commonElement(array1,array2);
console.log(array4);




