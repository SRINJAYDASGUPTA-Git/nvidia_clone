import CardSection from '@/components/CardSection'
import Navbar from '@/components/Navbar'
import React from 'react'
import { gamesCard, shopCard } from '@/constants'

const Home = () => {
  return (
    <main>
      <Navbar />
      <CardSection 
        title='Shop'
        cardArray={shopCard}
      />
      <CardSection 
        title='Gaming'
        cardArray={gamesCard}
      />

    </main>
  )
}
// ARROW FUNCTION

export default Home