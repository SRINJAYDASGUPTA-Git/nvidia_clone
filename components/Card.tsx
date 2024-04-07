import Image from 'next/image'
import React from 'react'

type CardProps = {
    img: string,
    title: string,
    description: string
}

const Card = ({
    img,
    title,
    description,
}:CardProps) => {
  return (
    <div className='max-w-[300px] w-full h-[300px] md:w-[300px] flex flex-col px-3 py-3 shadow-xl rounded-xl'>
        <Image src={img} alt={title} width={300} height={0} objectFit='contain' className='w-full rounded-xl py-2 mb-4' />
        <p className='text-xl text-[#6fb926]'>
            {title}
        </p>
        <p className='text-base'>
            {description}
        </p>
    </div>
  )
}

export default Card