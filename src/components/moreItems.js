import creatureData2 from '../dataFolder/creatureItems2'
import { useState } from 'react'
import ItemCard from './itemCard'
import { LeftGlow } from './backLight'
const MoreItems = () => {
  const [creatureItems, setCreatureItems] = useState(creatureData2)
  return (
    <>
    <section className="section" id='items'>

      <LeftGlow height="200px"></LeftGlow>
      <h2 className='center__align'>Select Your</h2>
      <h2 className='center__align'>Lost Items</h2>

      <div className='moreItems'>
        {creatureItems.map((item) => {
          return <ItemCard key={item.id} {...item} />
        })}
      </div>
    </section>
    </>
  )
}
export default MoreItems
