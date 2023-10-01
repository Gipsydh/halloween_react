const ItemCard = ({ id, title, img,logo, info }) => {
  return (
    <>
      <article className='card item_card itemCard1 box-item'>
        <div className='flip-box'>
          <div className='flip-box-front '>
            <div className='inner'>
              <img src={img} alt='' />
              <h3>{title}</h3>
              <div className='viewOver'>
                <i class={logo}></i>
              </div>
            </div>
          </div>
          <div className='flip-box-back '>
            <div className='inner'>
              <p>{info}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
export default ItemCard
