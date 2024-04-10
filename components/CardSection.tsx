
import React from 'react'
import Card from './Card'
type CardArrayProps = {
    img: string,
    title: string,
    description: string
}
const CardSection = ({title, cardArray}:{title:string, cardArray:CardArrayProps[]}) => {
  return (
    <section className='flex-center flex-col gap-3 py-6 px-3'>
        <span className='text-3xl uppercase text-[#6fb926]'>{title}</span>
        <div className='flex-center place-items-center flex-col md:flex-row gap-5'>
          {
            cardArray.map((card, index) => (
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
  )
}

export default CardSection