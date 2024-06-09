// JS-TEST-3
// Question 1:
// Write a JavaScript for loop that iterates from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Input:
// None
// Output:
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", ..., 100

// Question 2:

// Write a JavaScript function that takes a string as input and returns the character that appears the most frequently. If multiple characters have the same frequency, return the first one.
// Input:
// "javascript"
// Output:
// "a"

// Question 13:
// Create a JavaScript function that takes two arrays as input and returns a new array containing only the elements that are present in both arrays (intersection).
// Input:
// [1, 2, 3, 4]
// [2, 4, 6, 8]
// Output:
// [2, 4]

// Question 4:
// Write a JavaScript program that finds the largest prime factor of a given number.
// Input:
// 13195
// Output:
// 29

// Question 5:
// Create a JavaScript function that takes an array of numbers and returns a new array with all the duplicate elements removed.
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]

// Question 6:
// Write a JavaScript function that takes a nested array (an array of arrays) and returns a single flattened array.
// Input:
// [1, [2, [3, [4, 5]]], 6]
// Output:
// [1, 2, 3, 4, 5, 6]

// Question 7:
// Create a JavaScript program that implements a basic binary search algorithm. The function should take a sorted array and a target value, and return the index of the target value or -1 if it's not found.
// Input:
// [1, 2, 3, 4, 5, 6]
// 4
// Output:
// 3

// Question 8:
// Write a JavaScript function that takes a string as input and returns the first non-repeated character. If all characters are repeated, return null.
// Input:
// "swiss"
// Output:
// "w"

// Question 9:
// Create a JavaScript function that takes an array of integers and returns the longest increasing subsequence (not necessarily contiguous).
// Input:
// [10, 9, 2, 5, 3, 7, 101, 18]
// Output:
// 4

// Question 10:
// Write a JavaScript program that solves the "Tower of Hanoi" problem for n disks and prints the steps to move the disks from the source rod to the destination rod using an auxiliary rod.
// Input:
// 3
// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C


// Write a JavaScript for loop that iterates from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Input:
// None
// Output:
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", ..., 100

for (var i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}


// / Question 8:
// Write a JavaScript function that takes a string as input and returns the first non-repeated character. If all characters are repeated, return null.
// Input:
// "swiss"
// Output:
// "w"

function nonRepeatedChar(){

}