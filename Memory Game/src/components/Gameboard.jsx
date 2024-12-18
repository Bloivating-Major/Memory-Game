import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <div className="grid mt-6 grid-cols-4 gap-4 md:gap-5 px-2 md:px-4">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.id}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default GameBoard;
