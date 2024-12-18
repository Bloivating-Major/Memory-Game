import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const cardImages = [
  { src: "img/gojo-1.png", matched: false },
  { src: "img/rengoku-1.png", matched: false },
  { src: "img/sukuna-1.png", matched: false },
  { src: "img/tanjiro-1.png", matched: false },
  { src: "img/toji-1.png", matched: false },
  { src: "img/zenitsu-1.png", matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        setScore((prevScore) => prevScore + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col items-center gap-10 overflow-x-hidden">
      <h1 className="font-mono text-center text-3xl md:text-4xl font-bold uppercase mt-10 text-red-500 max-sm:mt-5">
        Magic Match
      </h1>

      <div className="flex md:flex-row gap-4 md:gap-10 items-center">
        <p className="text-lg md:text-xl uppercase text-red-500">
          Turns: {turns}
        </p>
        <p className="text-lg md:text-xl uppercase text-red-500">
          Score: {score}
        </p>
        <button
          onClick={shuffleCards}
          className="px-2 py-1 max-sm:text-sm md:px-5 md:py-3 bg-red-500 rounded-md uppercase hover:bg-red-700"
        >
          New Game
        </button>
      </div>

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
    </div>
  );
};

export default App;
