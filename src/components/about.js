import CustomBtn1 from './CustomBtn1'
import { LeftGlow, RightGlow } from './backLight'
import HeadingYellow from './heading1'
import StarSprincle from './starSprincle'
const About = ({direction,img,h2_1,h2_2,data,buttonInfo,stars}) => {
  return (
    <>
      <section className={`about ${direction}`}>
        <RightGlow height=''></RightGlow>
        <div className='left'>
          {stars&&<StarSprincle></StarSprincle>}
          <img src={img} alt='' />
        </div>
        <div className='right'>
          <article>
            <h2 className='left__align'>{h2_1}</h2>
            <h2 className='left__align'>{h2_2}</h2>
            <p>{data}</p>
            <CustomBtn1 name={buttonInfo} />
          </article>
        </div>
      </section>
    </>
  )
}
export default About
