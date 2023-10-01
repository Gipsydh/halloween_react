const CreatureCard = ({ id, title, info, detailedInfo, img,delay }) => {
  return (

    <article className='card category_card'>
      <img src={img} alt='' className='cardImg' />
      <h3 >{title}</h3>
      <p>{info}</p>
      
      <img src='./resources/stars.png' alt='star' className='star__card' />
    </article>
  )
}
export default CreatureCard
