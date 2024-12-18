import React from "react";

const Header = ({ turns, score, shuffleCards }) => {
  return (
    <header className="flex md:flex-row gap-4 md:gap-10 items-center">
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
    </header>
  );
};

export default Header;
