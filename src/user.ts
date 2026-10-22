// Interface notation
interface UserInterface {
  name: string,
  age: number,
  email?: string,
}

const kenny: UserInterface = {
  name: 'Kenny-kins',
  age: 25,
}

const anna: UserInterface = {
  name: 'Anna',
  age: 20,
  email: 'anna@test.com'
}

console.log(kenny.name);
console.log(anna.email);

// Type notation, completely equivalent to the interface notation above
type UserType = {
  name: string,
  age: number,
  email?: string
}

const federico: UserType = {
  name: 'Federico',
  age: 30
}

console.log(federico.age);
