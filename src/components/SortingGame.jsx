import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Fooditems from './Fooditems';
import DropZone from './DropZone';
import './SortingGame.css';

const foodData = [
  {
    name: 'Banana',
    image: '/assets/images/banana.png',
    type: 'healthy',
    audio: '/assets/audios/banana.mp3',
    hint: 'Bananas are fruits that give you good energy. They are healthy!',
  },
  {
    name: 'Burger',
    image: '/assets/images/burger.png',
    type: 'unhealthy',
    audio: '/assets/audios/burger.mp3',
    hint: 'Burgers are yummy, but have a lot of fat, making them unhealthy.',
  },
  {
    name: 'Milk',
    image: '/assets/images/milk-bottle.png',
    type: 'healthy',
    audio: '/assets/audios/milk.mp3',
    hint: 'Milk has calcium which makes your bones strong. It is healthy!',
  },
  {
    name: 'Icecream',
    image: '/assets/images/ice-cream.png',
    type: 'unhealthy',
    audio: '/assets/audios/icecream.mp3',
    hint: 'Ice cream has a lot of sugar, so it is an unhealthy treat.',
  },
  {
    name: 'Eggs',
    image: '/assets/images/eggs.png',
    type: 'healthy',
    audio: '/assets/audios/eggs.mp3',
    hint: 'Eggs are full of protein and help you grow. They are healthy!',
  },
  {
    name: 'Cooldrink',
    image: '/assets/images/drink.png',
    type: 'unhealthy',
    audio: '/assets/audios/cooldrink.mp3',
    hint: 'Fizzy drinks have too much sugar and are unhealthy.',
  }
];

const SortingGame = () => {
  const [items, setItems] = useState(foodData);
  const [score, setScore] = useState(0);
  const [wronglyPlacedItems, setWronglyPlacedItems] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing');
  const [lastWrongItem, setLastWrongItem] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    if (items.length === 0 && wronglyPlacedItems.length === 0 && gameStatus === 'playing') {
      setGameStatus('won');
    }
  }, [items, wronglyPlacedItems, gameStatus]);

  const handleDrop = (item, zoneType) => {
    setLastWrongItem(null);
    if (item.type === zoneType) {
      setScore(score + 1);
      setWronglyPlacedItems((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setWronglyPlacedItems((prev) => [...prev, item]);
      setLastWrongItem(item);
      const audio = new Audio(item.audio);
      audio.play();
    }
    setItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  const handleRedo = (itemToRedo) => {
    setLastWrongItem(null);
    setWronglyPlacedItems((prev) => prev.filter((i) => i.name !== itemToRedo.name));
    setItems((prev) => [...prev, itemToRedo]);
  };

  const handlePlayAgain = () => {
    setItems(foodData);
    setScore(0);
    setWronglyPlacedItems([]);
    setGameStatus('playing');
    setLastWrongItem(null);
  };

  if (gameStatus !== 'playing') {
    return (
      <div className="game-over-container">
        <h1 className="congrats-heading">
          {gameStatus === 'won' ? 'Congratulations!' : 'Game Over!'}
        </h1>
        {gameStatus === 'won' && (
          <p className="congrats-text">You sorted all the food correctly!</p>
        )}
        <p className="final-score">Final Score: {score}</p>
        <div className="game-over-buttons">
          <button onClick={handlePlayAgain} className="button">Play Again</button>
          <button onClick={() => navigate('/')} className="button">Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="header">
        <div className="header-buttons">
            <button onClick={() => navigate('/')} className='button'>Back to Home</button>
            <button onClick={() => setGameStatus('ended')} className="button end-game-button">End Game</button>
        </div>
        <div className="score-container">
            <h2 className="score">Score: {score}</h2>
            <h2 className="wrong-attempts">Wrong: {wronglyPlacedItems.length}</h2>
        </div>
      </div>

      <div className="hint-container">
        {lastWrongItem && <p className="hint-text">Hint: {lastWrongItem.hint}</p>}
      </div>

      <div className="zones">
        <DropZone type="healthy" onDrop={handleDrop} />
        <div className="wrong-items-container">
          {wronglyPlacedItems.map((item) => (
            <div key={item.name} className="wrong-item">
              <img src={item.image} alt={item.name} className="wrong-item-image" />
              <button onClick={() => handleRedo(item)} className="redo-button">Redo</button>
            </div>
          ))}
        </div>
        <DropZone type="unhealthy" onDrop={handleDrop} />
      </div>

      <div className="food-list">
        {items.map((item) => (
          <Fooditems key={item.name} item={item} />
        ))}
      </div>
      
      <footer className="game-footer">
        <p>Pro Tip: Press the <strong>`Esc`</strong> key to go back home at any time!</p>
      </footer>
    </div>
  );
};

export default SortingGame;