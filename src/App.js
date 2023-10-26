import './index.css'
import Header from './components/header'
import Lander from './components/lander'
import Creatures from './components/creatures'
import About from './components/about'
import MoreItems from './components/moreItems' 
import Footer from './components/footer'
import GoHome from './components/goHome'
import { Link } from 'react-scroll'
function App() {
  
  return (
    <main className='container'>
      <GoHome />
      <Header />
      <Lander />
      <Creatures />
      <About
        id="about"
        direction=''
        img='../resources/about-scare.png'
        h2_1='about the night'
        h2_2='of terror'
        data='Halloween is a special festival that celebrates the dead and the supernatural. It is celebrated on October 31 every year in many countries around the world. In these time carving on pumpkin glows as named Jack-o-lalterns, wearing scary cloths like ghosts, watching horror movies and telling spooky stories.'
        btnId={2}
        buttonInfo='Know More!!!'
        stars={false}
      />
      <MoreItems id='items' />
      <About
        id="party"
        direction='about__inv'
        img='../resources/party-cauldron.png'
        h2_1='Halloween'
        h2_2='Party 31 October'
        data='Organize a great Halloween party and enjoy the creepiest night of terror with all your friends.'
        buttonInfo='Know More!!!'
        btnId={3}
        stars={true}
      />
      <Footer></Footer>
    </main>
  )
}

export default App
