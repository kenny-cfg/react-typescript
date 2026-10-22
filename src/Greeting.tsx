interface GreetingProps {
  greeting: 'hello' | 'goodbye',
  name: string
}

const Greeting = ({ greeting, name }: GreetingProps) => {
  return <p>{greeting} {name}!</p>
}

export default Greeting;