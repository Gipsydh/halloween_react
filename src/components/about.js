import CustomBtn1 from './CustomBtn1'
import { LeftGlow, RightGlow } from './backLight'
import HeadingYellow from './heading1'
import {Fade} from 'react-reveal'
import StarSprincle from './starSprincle'
const About = ({id,direction,img,h2_1,h2_2,data,buttonInfo,stars,btnId}) => {
  return (
    <>
      <section className={`about ${direction}`} id={id}>
        <RightGlow height=''></RightGlow>
        <Fade left distance="50px">

        <div className='left'>
          {stars&&<StarSprincle></StarSprincle>}
          <img src={img} alt='' />
        </div>
        <div className='right'>
          <article>
            <h2 className='left__align'>{h2_1}</h2>
            <h2 className='left__align'>{h2_2}</h2>
            <p>{data}</p>
            <CustomBtn1 name={buttonInfo} btnId={btnId}/>
          </article>
        </div>
        </Fade>
      </section>
    </>
  )
}
export default About
