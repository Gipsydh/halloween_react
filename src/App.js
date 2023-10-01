import './index.css'
import Header from './components/header'
import Lander from './components/lander'
import Creatures from './components/creatures'
import About from './components/about'
import MoreItems from './components/moreItems'
function App() {
  return (
    <div className='container'>
      <Header />
      <Lander />
      <Creatures />
      <About
        direction=''
        img='../resources/about-scare.png'
        h2_1='about the night'
        h2_2='of terror'
        data='Halloween is a special festival that celebrates the dead and the supernatural. It is celebrated on October 31 every year in many countries around the world. In these time carving on pumpkin glows as named Jack-o-lalterns, wearing scary cloths like ghosts, watching horror movies and telling spooky stories.'
        buttonInfo='Know More!!!'
        stars={false}
      />
      <MoreItems />
      <About
        direction='about__inv'
        img='../resources/party-cauldron.png'
        h2_1='Halloween'
        h2_2='Party 31 October'
        data='Organize a great Halloween party and enjoy the creepiest night of terror with all your friends.'
        buttonInfo='Know More!!!'
        stars={true}
      />
    </div>
  )
}

export default App
