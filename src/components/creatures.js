import { useState } from 'react'
import creatureData from '../dataFolder/creatureItems'
import CreatureCard from './creatureCard'
import { LeftGlow } from './backLight'

const Creatures = () => {
  const [creatureItems, setCreatureItems] = useState(creatureData)
  return (
    <>
      <section className='section category'>
        <LeftGlow></LeftGlow>

        <h2>Explore Your</h2>
        <h2>Spooky Category</h2>
        <div className='cardBox'>
          {creatureItems.map((creatureItem) => {
            return (
              <CreatureCard
                key={creatureItem.id}
                {...creatureItem}
              ></CreatureCard>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Creatures
