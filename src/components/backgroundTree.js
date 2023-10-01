// import Reveal from 'react-awesome-reveal'
// import { keyframes } from '@emotion/react'

// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(-200px, -100px, 0);
//   }

//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `

// function CustomAnimation({ children }) {
//   return <Reveal keyframes={customAnimation}>{children}</Reveal>
// }
// const customAnimationLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(-200px, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `
// const customAnimationRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(200px, 0,0 );
//   }
//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `
const TreesLeft = () => {
  return (
    // <Reveal keyframes={customAnimationLeft} delay={300}>
      <div className='backGroundTreeLeft backgroundTree'>
        <img src={'./resources/home-tree1.png'} alt='' />
      </div>
    // {/* </Reveal> */}
  )
}
const TreesRight = () => {
  return (
    // <Reveal keyframes={customAnimationRight} delay={300}>
      <div className='backGroundTreeRight backgroundTree'>
        <img src={'./resources/home-tree2.png'} alt='' />
      </div>
    // </Reveal>
  )
}
export { TreesLeft, TreesRight }
