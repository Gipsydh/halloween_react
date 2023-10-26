import { Fade } from 'react-reveal'
const TreesLeft = ({ rotate, size, bottom, left }) => {
  return (
    <Fade left>

    <div
      className='backGroundTreeLeft backgroundTree'
      style={{ bottom: bottom, left: left }}
    >
      <img
        style={{ transform: `rotate(${rotate}deg)`, height: `${size}px` }}
        src={'./resources/home-tree1.png'}
        alt=''
      />
    </div>
    </Fade>
  )
}
const TreesRight = () => {

  return (
    <Fade right>

    <div className='backGroundTreeRight backgroundTree'>
      <img src={'./resources/home-tree2.png'} alt='' />
    </div>
    </Fade>
  )
}
const TreeBottom = () => {
  return (
    <div className='backGroundTreeBottom backgroundTree '>
      <img src={'./resources/footer-tree2.png'} alt='' />
    </div>
  )
}
export { TreesLeft, TreesRight, TreeBottom }
