// function add(first, second){
//     const total = first + second;
//     return total;
// }

// const result = add(10, 20);
// console.log(result);


// function add(first, second){
//     const total = first + second;
//     return total;
// }

// const result = add(10);
// console.log(result);



// function add(first, second){
//     const total = first + second;
//     return total;
// }

// const result = add();
// console.log(result);


// giving no parameters
// function add(first, second){
//     console.log(first, second)
//     const total = first + second;
//     return total;
// }

// const result = add();
// console.log(result);


// giving one parameter
// function add(first, second){
//     console.log(first, second)
//     const total = first + second;
//     return total;
// }

// const result = add(10);
// console.log(result);


// giving one parameter
// function add(first, second){
//     console.log(first, second);
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

// const result = add(10);
// console.log(result);


// function add(first, second = 0){
//     const total = first + second;
//     return total;
// }
    
// const result = add(10, 20);
// console.log(result);



// function add(first, second = 0){
//     const total = first + second;
//     return total;
// }
    
// const result = add(10);
// console.log(result);




// function add(first, second = 36){
//     const total = first + second;
//     return total;
// }
    
// const result = add(10);
// console.log(result);


// function add(first, second = 36){
//     const total = first + second;
//     return total;
// }
    
// const result = add(10, 5);
// console.log(result);


// function add(first = 0, second = 0){
//     const total = first + second;
//     return total;
// }
    
// const result = add(10);
// console.log(result);


function add(first = 0, second = 0){
    const total = first + second;
    return total;
}
    
const result = add();
console.log(result);


// function fullName (first, last = 'Chowdhury'){
//     const name = first + ' ' + last;
//     return name;
// }

// const name = fullName('Aslam');
// console.log(name);



function fullName (first, last = 'Chowdhury'){
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Gelam');
console.log(name);