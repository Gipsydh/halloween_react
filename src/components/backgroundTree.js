import Fade from 'react-reveal/Fade'

const TreesLeft = () => {
  return (
    <Fade left delay={300}>
      <div className='backGroundTreeLeft backgroundTree'>
        <img src={'./resources/home-tree1.png'} alt='' />
      </div>
    </Fade>
  )
}
const TreesRight = () => {
  return (
    <Fade right delay={300}>

    <div className='backGroundTreeRight backgroundTree'>
      <img src={'./resources/home-tree2.png'} alt='' />
    </div>
    </Fade>
  )
}
export { TreesLeft, TreesRight }
