function fullName( person : { firstname: string, lastname: string }): string {
  return `${person.firstname} ${person.lastname}`;
}

let p = {
  firstname: 'john',
  lastname: 'pinski'
}

console.log(fullName(p));