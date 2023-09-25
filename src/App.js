import './index.css'
import Header from './components/header'
import Lander from './components/lander'
import Creatures from './components/creatures'
function App() {
  return (
    <div className='container'>
      
        <Header />
        <Lander />
        <Creatures/>
    </div>
  )
}

export default App
