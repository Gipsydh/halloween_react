import {Fade} from 'react-reveal'
const CreatureCard = ({ id, title, info, detailedInfo, img,delay }) => {
  return (
    <Fade top delay={delay} distance="40px">
      
    <article className='card category_card'>
      <img src={img} alt='' className='cardImg' />
      <h3 >{title}</h3>
      <p>{info}</p>
      
      <img src='./resources/stars.png' alt='star' className='star__card' />
    </article>
    </Fade>
  )
}
export default CreatureCard
