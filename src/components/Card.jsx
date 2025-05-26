import React from "react";

const Card = ({ card, cardList, onUpdateCardList, shuffleCards }) => {
  const handleCardClick = () => {
    const updatedCardList = shuffleCards(cardList);
    onUpdateCardList(updatedCardList);
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <h2 className="card-name">{card.name}</h2>
      <img src={card.image} alt={card.name} />
    </div>
  );
};

export default Card;
