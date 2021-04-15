interface Person {
  firstname: string,
  lastname: string
}

function fullName(person: Person): string {
  return `${person.firstname} ${person.lastname}`;
}

let p = {
  firstname: 'john',
  lastname: 'pinski'
}

console.log(fullName(p));