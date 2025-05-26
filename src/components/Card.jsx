const Card = ({
  card,
  cardList,
  onUpdateCardList,
  shuffleCards,
  currentScore,
  onUpdateCurrentScore,
  bestScore,
  onUpdateBestScore,
  pickedCards,
  onUpdatePickedCards,
}) => {
  const handleCardClick = () => {
    // If the card has already been picked, reset the score
    if (pickedCards.includes(card.id)) {
      onUpdateCurrentScore(0);
      onUpdatePickedCards([]);
      return;
    }

    // Update Best Score, Current Score, and Picked Cards List
    onUpdatePickedCards([...pickedCards, card.id]);
    onUpdateCurrentScore(currentScore + 1);
    onUpdateBestScore(Math.max(bestScore, currentScore + 1));

    // Shuffles the card list
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
