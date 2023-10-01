const StarLeft = ({ top, left, size }) => {
  return (
    <div className='starLeft star' style={{ left: left, top: top }}>
      <img style={{ height: size }} src={'./resources/stars.png'} alt='' />
    </div>
  )
}
const StarRight = ({ bottom, right, size }) => {
  return (
    <div className='starRight star' style={{ bottom: bottom, right: right }}>
      <img
        style={{ height: size,}}
        src={'./resources/stars.png'}
        alt=''
      />
    </div>
  )
}
export { StarLeft, StarRight }
