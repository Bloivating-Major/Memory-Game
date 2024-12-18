import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import GameBoard from "../src/components/Gameboard";
import { cardImages } from "./data/cardData";
import { shuffleCards } from "./utils/cardUtils";

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const initializeGame = () => {
    setCards(shuffleCards(cardImages));
    setChoiceOne(null);
    setChoiceTwo(null);
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
    initializeGame();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center gap-10 overflow-x-hidden">
      <h1 className="font-mono text-center text-3xl md:text-4xl font-bold uppercase mt-10 text-red-500 max-sm:mt-5">
        Magic Match
      </h1>
      <Header turns={turns} score={score} shuffleCards={initializeGame} />
      <GameBoard
        cards={cards}
        handleChoice={handleChoice}
        choiceOne={choiceOne}
        choiceTwo={choiceTwo}
        disabled={disabled}
      />
    </div>
  );
};

export default App;
