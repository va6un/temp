import React from 'react'
import './Card.css'
import CardData  from '../../data'
export default function Card() {
  return (
    <>
    <div className="cards-wrapper">
        {CardData.map(card => (
            <div className="container" key={card.id}>
                <img src={card.Image} alt={card.imgName} />
                <h2>{card.imgName}</h2>
                <p>{card.imgContent}</p>
                <button>Enter</button>
            </div>
        ))}
    </div>
    </>
  )
}
