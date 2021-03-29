//create function getSum, specifying parameter types and return type
// function getSum(num1: number, num2: number) : number {
//   return num1 + num2;
// }
// console.log(getSum(4, 4));
//create a function expression that accepts any type as parameters, casts the parameters to number type, and returns number
var mySum = function getSum(num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = Number(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = Number(num2);
    }
    return num1 + num2;
};
console.log(mySum('3', 5));
