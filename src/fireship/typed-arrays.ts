//sets up a tuple that accepts number, string, and boolean types

type MyList = [number?, string?, boolean?];
const arr : MyList = [];

arr.push(1);
arr.push('23');
arr.push(false);

console.log(arr);