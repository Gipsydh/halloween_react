import CustomBtn1 from '../components/CustomBtn1'
import { TreesLeft, TreesRight } from '../components/backgroundTree'
import { StarLeft, StarRight } from './poppingStars'
import { LeftGlow, RightGlow } from './backLight'
import Reveal from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
const Lander = () => {
  return (
    <>
      <section className='section lander'>
        <LeftGlow></LeftGlow>
        <RightGlow></RightGlow>
        <Reveal keyframes={customAnimation}>
          <div className='centerContent'>
            <h1 className='heading1'>
              <StarLeft top='-10px' left='-80px' size='50px'></StarLeft>
              HALLOWEEN
              <StarRight bottom='-10px' right='-80px' size='50px'></StarRight>
            </h1>
            <h1 className='heading2'>Trick Or Treat!!!</h1>
            <p>
              "There is magic in the night when pumpkins glow by moonlight"
              -Jack o laltern
            </p>
            <CustomBtn1 name='Explore More!!!'></CustomBtn1>
            <img
              className='pumpkin'
              src={'./resources/home-pumpkin.png'}
              alt=''
            />
          </div>
        </Reveal>
        <TreesLeft></TreesLeft>
        <TreesRight></TreesRight>
      </section>
    </>
  )
}
export default Lander
