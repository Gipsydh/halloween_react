import CustomBtn1 from '../components/CustomBtn1'
import { TreesLeft, TreesRight } from '../components/backgroundTree'
import { StarLeft, StarRight } from './poppingStars'
import { LeftGlow, RightGlow } from './backLight'
import Fade from 'react-reveal/Fade'
const Lander = () => {
  return (
    <>
      <section className='section lander'>
        <LeftGlow></LeftGlow>
        <RightGlow></RightGlow>
        <Fade top distance='20%' duration={2000}>
          <div className='centerContent'>
            <h1 className='heading1'>
              <StarLeft></StarLeft>
              HALLOWEEN
              <StarRight></StarRight>
            </h1>
            <h1 className='heading2'>Trick Or Treat!!!</h1>
            <p>
              "There is magic in the night when pumpkins glow by moonlight"
              -Jack o laltern
            </p>
            <CustomBtn1></CustomBtn1>
            <Fade top distance='20%' duration={2000} delay={500}>
              <img
                className='pumpkin'
                src={'./resources/home-pumpkin.png'}
                alt=''
              />
            </Fade>
          </div>
        </Fade>
        <TreesLeft></TreesLeft>
        <TreesRight></TreesRight>
      </section>
    </>
  )
}
export default Lander
