interface Person {
  firstname: string,
  lastname?: string
}

function fullName(person: Person): string {
  return `${person.firstname} ${person.lastname}`;
}

let p = {
  firstname: 'john',
}

console.log(fullName(p));