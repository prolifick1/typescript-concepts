function fullName(person) {
    return person.firstname + " " + person.lastname;
}
var p = {
    firstname: 'john',
    lastname: 'pinski'
};
console.log(fullName(p));
