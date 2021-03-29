//create function getSum, specifying parameter types and return type
// function getSum(num1: number, num2: number) : number {
//   return num1 + num2;
// }
// console.log(getSum(4, 4));
// //create a function expression that accepts any type as parameters, casts the parameters to number type, and returns number
// let mySum = function getSum(num1: any, num2: any): number {
//   if (typeof (num1) === 'string') {
//     num1 = Number(num1);
//   }
//   if(typeof(num2) === 'string') {
//     num2 = Number(num2);
//   }
//   return num1 + num2;
// }
// console.log(mySum('3', 5));
// //create a function that takes a firstName and OPTIONAL lastName, and returns either just the firstName or the firstName lastName
// function getName(firstName: string, lastName?: string): string {
//   if(lastName === undefined) {
//     return firstName;
//   }
//   return `${firstName} ${lastName}`;
// }
// console.log(getName('John'));
function myVoid() {
    return 4;
}
