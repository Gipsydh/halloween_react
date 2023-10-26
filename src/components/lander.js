import CustomBtn1 from '../components/CustomBtn1'
import { TreesLeft, TreesRight } from '../components/backgroundTree'
import { StarLeft, StarRight } from './poppingStars'
import { LeftGlow, RightGlow } from './backLight'

import { Fade } from 'react-reveal'

const Lander = () => {
  return (
    <>
      <section className='section lander' id='home'>
        <LeftGlow></LeftGlow>
        <RightGlow></RightGlow>
        <div className='centerContent'>
          <Fade top>

          <h1 className='heading1'>
            <StarLeft top='-10px' left='-80px' size='50px'></StarLeft>
            HALLOWEEN
            <StarRight bottom='-10px' right='-80px' size='50px'></StarRight>
          </h1>
          <h1 className='heading2'>Trick Or Treat!!!</h1>
          <p>
            "There is magic in the night when pumpkins glow by moonlight" -Jack
            o laltern
          </p>
          <CustomBtn1 name='Explore More!!!' btnId={1}></CustomBtn1>
          </Fade>
          <Fade top distance="50px" delay={500}>

          <img
            className='pumpkin'
            src={'./resources/home-pumpkin.png'}
            alt=''
          />
          </Fade>
        </div>
        <TreesLeft></TreesLeft>
        <TreesRight></TreesRight>
      </section>
    </>
  )
}
export default Lander
