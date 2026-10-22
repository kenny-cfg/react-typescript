type GreetingType = 'hello' | 'goodbye';
type NameType = string;

interface GreetingProps {
  greeting: GreetingType,
  name: NameType
}

const Greeting = ({ greeting, name }: GreetingProps) => {
  return <p>{greeting} {name}!</p>
}

export default Greeting;