# Magic Match

Magic Match is a simple memory card game built using **React** and styled with **Tailwind CSS**. The goal is to match pairs of cards by flipping them over. This project demonstrates essential React concepts such as component-based architecture, state management, and event handling.

## Features

- Flip cards to reveal the images.
- Match pairs to score points.
- Tracks the number of turns taken.
- Randomly shuffles cards for a new game.
- Responsive design using Tailwind CSS.

---

## Folder Structure

```
src/
├── components/
│   ├── Card.jsx          // Individual card component
│   ├── GameBoard.jsx     // Game board displaying cards
│   ├── Header.jsx        // Header showing turns and score
├── data/
│   └── cardData.js       // Data for card images
├── utils/
│   └── cardUtils.js      // Utility for shuffling cards
├── styles/
│   └── Card.css          // Styling for the card component
├── App.jsx               // Main application file
├── index.css             // Global CSS file
├── index.js              // Entry point of the application
```

---

## Components

### **1. Card.jsx**
Responsible for rendering an individual card with front and back images.

- **Props:**
  - `card`: Object containing card details (image source and match status).
  - `handleChoice`: Function to handle card click.
  - `flipped`: Boolean to indicate if the card is flipped.
  - `disabled`: Boolean to disable interaction.

```jsx
const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="front" className="front" />
        <img src="/img/cover.png" alt="back" className="back" onClick={handleClick} />
      </div>
    </div>
  );
};
```

### **2. Header.jsx**
Displays the current number of turns, score, and a button to start a new game.

- **Props:**
  - `turns`: Current turn count.
  - `score`: Current score.
  - `shuffleCards`: Function to reset and shuffle the game.

```jsx
const Header = ({ turns, score, shuffleCards }) => {
  return (
    <header>
      <p>Turns: {turns}</p>
      <p>Score: {score}</p>
      <button onClick={shuffleCards}>New Game</button>
    </header>
  );
};
```

### **3. GameBoard.jsx**
Renders the grid of cards on the game board.

- **Props:**
  - `cards`: Array of card objects.
  - `handleChoice`: Function to handle card selection.
  - `choiceOne`, `choiceTwo`: Currently selected cards.
  - `disabled`: Boolean to disable card interaction.

```jsx
const GameBoard = ({ cards, handleChoice, choiceOne, choiceTwo, disabled }) => {
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
```

---

## Data and Utilities

### **1. cardData.js**
Holds the array of card objects with their image sources and initial match statuses.

```javascript
export const cardImages = [
  { src: "img/gojo-1.png", matched: false },
  { src: "img/rengoku-1.png", matched: false },
  { src: "img/sukuna-1.png", matched: false },
  { src: "img/tanjiro-1.png", matched: false },
  { src: "img/toji-1.png", matched: false },
  { src: "img/zenitsu-1.png", matched: false },
];
```

### **2. cardUtils.js**
Contains a function to shuffle the cards.

```javascript
export const shuffleCards = (cardImages) => {
  return [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};
```

---

## App Component
Manages the game logic, including state management for cards, turns, and score. It initializes the game and handles card matching.

### **State Variables**
- `cards`: Array of shuffled cards.
- `turns`: Number of turns taken.
- `choiceOne`, `choiceTwo`: Cards selected for matching.
- `disabled`: Disables interaction during matching.
- `score`: Tracks matched pairs.

### **Functions**
1. **shuffleCards:** Shuffles the cards and resets the game.
2. **handleChoice:** Handles the card selection.
3. **resetTurn:** Resets selected cards and increments turn count.
4. **useEffect Hook:**
   - Initializes the game.
   - Handles card matching logic.

---

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd magic-match
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **View in the browser:**
   Open [http://localhost:3000](http://localhost:3000) to play the game.

---

## Assets
Place the following image files in the `public/img` folder:

- `gojo-1.png`
- `rengoku-1.png`
- `sukuna-1.png`
- `tanjiro-1.png`
- `toji-1.png`
- `zenitsu-1.png`
- `cover.png`

---

## Technologies Used

- **React:** Component-based architecture for building the UI.
- **Tailwind CSS:** For responsive and modern styling.
- **JavaScript:** For logic and state management.

---

## Future Enhancements

- Add timer to challenge players.
- Implement difficulty levels with varying grid sizes.
- Add animations for card flips.

---

Enjoy playing Magic Match and improving your memory skills!

