import './App.css'
import DisgustingHeader from './DisgustingHeader'
import Greeting from './Greeting'

function App() {
  return (
    <>
      <DisgustingHeader age={55}>Federico</DisgustingHeader>
      <Greeting age={20} name="Katie" />
      <Greeting age={21} name="Kirstie" />
    </>
  )
}

export default App
