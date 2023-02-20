// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
// console.log(bird);
const message = bird + ' potas potas'
console.log(message);


const numbers = [12, 89, 65, 45];
// reassign not allowed
// numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);



const student = {
    name: 'mofiz',
    address: 'Rongpur',
}

// student = {name: 'Mofazzol'}
student.name = 'Mofazzol';



// for(i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// let sum =0;
// for(i=0; i<numbers.length; i++){
//     const number = numbers[i];
//     // console.log(number);
//     sum = sum + number;
//     // console.log(sum);
// }
// console.log(number);



let sum =0;
for(i=0; i<numbers.length; i++){
    var number = numbers[i];
    // console.log(number);
    sum = sum + number;
    // console.log(sum);
}
console.log(number);