
const GoHome = () => {
  window.addEventListener('scroll',()=>{
   const positon = window.pageYOffset;
   let goHome=document.querySelector(".goHome")

   if(positon>=30){
    goHome.style.display="flex"
    goHome.classList.add("goHomeAnime")
   }
   else{
    goHome.style.display = 'none'
    goHome.classList.remove('goHomeAnime')

   }
  })
  const toGoHome=()=>{
   console.log("check")
   window.scrollTo(0,0);
  }
  return (
    <div className='goHome' onClick={toGoHome} >
      <i className='fa-solid fa-arrow-up'></i>
    </div>
  )
}
export default GoHome
