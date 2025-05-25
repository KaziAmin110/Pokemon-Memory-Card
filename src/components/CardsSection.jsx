import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardsSection = () => {
  const [cardList, setCardList] = useState([]);

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
        setCardList(pokemonCards);
      } catch (error) {
        console.error("Error Fetching Pokemon Card Data", error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div className="cards-section">
      {cardList.map((card, index) => {
        return <Card card={card} key={card.id} index={index} />;
      })}
    </div>
  );
};

export default CardsSection;
