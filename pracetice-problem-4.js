// Practice Problem 4

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
// Print the result.

// Practice Problem 4





const numbers1 = [12, 85, 999, 78];
const numbers2 = [24, 56, 4000, 60, 78];

const numbers = [...numbers1, ...numbers2];
console.log(numbers);

const largest = Math.max(...numbers);
console.log(largest);
