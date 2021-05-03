"use strict";
function fullName(person) {
    return person.firstname + " " + person.lastname;
}
var p = {
    firstname: 'john',
};
console.log(fullName(p));
