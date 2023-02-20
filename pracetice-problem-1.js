// Practice Problem 1



// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
// no-1
const multiplyAll = (a, b, c) => a * b * c;

const result = multiplyAll(7, 8, 10);
console.log(result);




// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
// no-2

const newMultiLine = `I am a web developer.
I love to code.
I love to eat biryani`;

 console.log(newMultiLine);



//  3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.
//  no-3
function add(first, second = 5){
    const total = first + second;
    return total;
}
    
const totalValue = add(10);
console.log(totalValue);
