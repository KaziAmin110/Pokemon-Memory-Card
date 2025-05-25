import React from 'react'

const Card = ({card, index}) => {
  return (
    <div className='card-container'>
        <h2 className='card-name'>{card.name}</h2>
        <img src={card.image} alt={card.name} />
    </div>
  )
}

export default Card