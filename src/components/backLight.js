const LeftGlow=({height})=>{
 return (<div style={{top:height}} className='backLightLeft backLight'>
   <div className='innerGlow left'></div>
 </div>)
}
const RightGlow=()=>{
 return (<div className='backLightRight backLight'>
   <div className='innerGlow right'></div>
 </div>)
}

export {LeftGlow,RightGlow}