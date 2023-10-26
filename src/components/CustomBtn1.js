const CustomBtn1 = ({ name, btnId }) => {
  return (
    <>
      <button
        onClick={() => {
          if (btnId === 1)
            window.location.href = 'https://www.youtube.com/watch?v=Xvgq8jnRKz8'
          else if (btnId === 2)
            window.location.href = 'https://www.youtube.com/watch?v=iO90mRJ903E'
          else if (btnId === 3)
            window.location.href = 'https://www.youtube.com/watch?v=SsN2aWPnMZI'
        }}
        className='customBtn__1'
        type='button'
      >
        {name}
      </button>
    </>
  )
}
export default CustomBtn1
