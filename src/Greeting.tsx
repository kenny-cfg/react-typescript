type GreetingProps = {
  name: string,
  age: number
}

const Greeting = ({ age, name }: GreetingProps) => {
  return <p>{name} is {age} years old</p>
}

export default Greeting;