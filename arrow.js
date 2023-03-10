// function declaration 

// function add(first, second){
//     const total = first + second;
//     return total;
// }

// document.getElementById('btn-add').onclick = function addBG(){

// }

const number = 56;
// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}


// function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

// function add(first, second){
//     const total = first + second;
//     return total;
// }

function add4(first, second){
    return first + second;
}
// const result = add(10, 20);
// console.log(result);



const add5 = function(first, second){
    return first + second;
}
// const result = add5(10, 20);
// console.log(result);


// arrow function
const add6 = (first, second) => first + second;
const result = add6(10, 20);
console.log(result);


// const result = add(10, 20);
// console.log(result);


// interview question: differences between 
// function declaration, function expression and arrow function