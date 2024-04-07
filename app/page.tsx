import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import { shopCard } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className='flex-center flex-col gap-3 py-6 px-3'>
        <span className='text-3xl uppercase text-[#6fb926]'>Shop</span>
        <div className='flex-center place-items-center flex-col md:flex-row gap-5'>
          {
            shopCard.map((card, index) => (
              <Card
                key={index}
                img={card.img}
                title={card.title}
                description={card.description}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}
// ARROW FUNCTION

export default Home