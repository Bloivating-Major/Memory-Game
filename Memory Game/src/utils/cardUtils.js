export const shuffleCards = (cardImages) => {
    return [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
  };
  