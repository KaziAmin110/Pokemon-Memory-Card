import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardsSection = ({
  currentScore,
  onUpdateCurrentScore,
  bestScore,
  onUpdateBestScore,
}) => {
  const [cardList, setCardList] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  const shuffleCards = (array) => {
    const shuffledArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
        );
        const pokemonData = response.data.results;

        const pokemonCards = await Promise.all(
          pokemonData.map(async (pokemon) => {
            const cardResponse = await axios.get(pokemon.url);
            return {
              id: cardResponse.data.id,
              name: cardResponse.data.name,
              image: cardResponse.data.sprites.front_default,
            };
          })
        );

        const shuffledCards = shuffleCards(pokemonCards);
        setCardList(shuffledCards);
      } catch (error) {
        console.error("Error Fetching Pokemon Card Data", error);
      }
    };
    fetchCardData();
  }, []);

  return (
    <div className="cards-section">
      {cardList.length > 0 ? (
        cardList.map((card) => {
          return (
            <Card
              card={card}
              key={card.id}
              cardList={cardList}
              onUpdateCardList={setCardList}
              shuffleCards={shuffleCards}
              currentScore={currentScore}
              onUpdateCurrentScore={onUpdateCurrentScore}
              bestScore={bestScore}
              onUpdateBestScore={onUpdateBestScore}
              pickedCards={pickedCards}
              onUpdatePickedCards={setPickedCards}
            />
          );
        })
      ) : (
        <p>Loading Pokémon cards...</p>
      )}
    </div>
  );
};

export default CardsSection;
