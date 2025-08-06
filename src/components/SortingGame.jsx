import { useState } from 'react';
import Fooditems from './Fooditems';
import DropZone from './DropZone';
import './SortingGame.css';

const foodData = [
  {
    name: 'Banana',
    image: '/assets/images/banana.png',
    type: 'healthy',
    audio: '/assets/audios/banana.mp3',
  },
  {
    name: 'Burger',
    image: '/assets/images/burger.png',
    type: 'unhealthy',
    audio: '/assets/audios/burger.mp3',
  },
  // can add more items here
];

const SortingGame = () => {
  const [items, setItems] = useState(foodData);
  const [score, setScore] = useState(0);

  const handleDrop = (item, zoneType) => {
    if (item.type === zoneType) {
      setScore(score + 1);
    } else {
      const audio = new Audio(item.audio);
      audio.play();
    }

    setItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  return (
    <div className="game-container">
      <h2 className="score">Score: {score}</h2>
      <div className="zones">
        <DropZone type="healthy" onDrop={handleDrop} />
        <DropZone type="unhealthy" onDrop={handleDrop} />
      </div>
      <div className="food-list">
        {items.map((item) => (
          <Fooditems key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SortingGame;