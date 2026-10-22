// Interface notation
interface UserInterface {
  name: string,
  age: number,
}

const kenny: UserInterface = {
  name: 'Kenny-kins',
  age: 25,
}

console.log(kenny.name);

// Type notation, completely equivalent to the interface notation above
type UserType = {
  name: string,
  age: number,
}

const federico: UserType = {
  name: 'Federico',
  age: 30
}

console.log(federico.age);
