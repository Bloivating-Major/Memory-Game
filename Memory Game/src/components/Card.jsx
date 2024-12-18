import React from "react";
import "../styles/Card.css";

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          src={card.src}
          alt="front"
          className="front h-20 w-20 md:h-32 md:w-32 lg:h-48 lg:w-48 shadow-md shadow-green-600 rounded-lg"
        />
        <img
          src="/img/cover.png"
          alt="back"
          className="back h-20 w-20 md:h-32 md:w-32 lg:h-48 lg:w-48 shadow-md shadow-green-600 rounded-lg"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
