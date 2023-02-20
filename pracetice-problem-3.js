// var nums = [11,13,28,20,35,39];
// function make_avg(ints){
//     var total = 0;
//     for(var i = 0; i<ints.length;i++){
//     var number = ints[i];
//     total = total + number ;
//     }
//     var average = total / ints.length;
//     return average ;
//     }
    
//     var result = make_avg(nums)
//     console.log(result);




// Practice Problem 3

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

// const  allNums = [11,13,28,20,35,39];
const makeAverage = (...nums) =>{
    let total = 0;
    for(i = 0; i <nums.length; i++){
        const number = nums[i] * nums[i];
        total = total + number;
        // const average = total /nums.length;
        

    }
    const average = total /nums.length;
    return average;
}


const  allNums = [11,13,28,20,35,39];
const result = makeAverage(...allNums);
console.log(result);
