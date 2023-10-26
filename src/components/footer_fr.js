const FooterFr=({title,options})=>{
 return <div className="fr">
  <h3>
   {title}
  </h3>
  {
   console.log(options)
  }
  {
   options.map((option)=>{
    if(option.img){
      return (<div onClick={()=>{
        window.location.href=option.href
      }} className="fr_option" style={{display:"inline-block",marginRight:"20px"}}>
     
      <i className={option.img}></i>
    </div>)
    }
    return (<div className="fr_option">
     
      {option.img&&
      <>
       <i class="${option.img}"></i>
      </>
      }
      <p>{!option.img&&option.name}</p>
    </div>)
   })
  }
 </div>
}
export default FooterFr