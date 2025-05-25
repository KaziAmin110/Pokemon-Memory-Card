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

        if (!response || !response.data) {
          throw new Error("Fetch Card Data Error");
        }

        const data = response.data.results;

        const cardData = await Promise.all(
          data.map(async (item) => {
            const response = await axios.get(item.url);

            if (!response || !response.data) {
              throw new Error("Fetch Card Data Error");
            }

            return {
              name: item.name,
              image: response.data.sprites.front_default,
              id: response.data.id,
            };
          })
        );
        setCardList(cardData);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  return (
    <div className="cards-section">
      {cardList.map((card, index) => {
        return <Card card={card} key={card.id} index={index}/>;
      })}
    </div>
  );
};

export default CardsSection;
