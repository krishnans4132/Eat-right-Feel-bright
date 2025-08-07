import { useState } from 'react';
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
  },
  {
    name: 'Burger',
    image: '/assets/images/burger.png',
    type: 'unhealthy',
    audio: '/assets/audios/burger.mp3',
  },
  {
    name: 'Milk',
    image: '/assets/images/milk-bottle.png',
    type: 'healthy',
    audio: '/assets/audios/milk.mp3',
  },
  {
    name: 'Icecream',
    image: '/assets/images/ice-cream.png',
    type: 'unhealthy',
    audio: '/assets/audios/icecream.mp3',
  },
  {
    name: 'Eggs',
    image: '/assets/images/eggs.png',
    type: 'healthy',
    audio: '/assets/audios/eggs.mp3',
  },
  {
    name: 'Cooldrink',
    image: '/assets/images/drink.png',
    type: 'unhealthy',
    audio: '/assets/audios/cooldrink.mp3',
  }
  // can add more items here
];

const SortingGame = () => {
  const [items, setItems] = useState(foodData);
  const [score, setScore] = useState(0);
  // NEW: State to hold items placed in the wrong zone
  const [wronglyPlacedItems, setWronglyPlacedItems] = useState([]);
  const navigate = useNavigate();

  const handleDrop = (item, zoneType) => {
    // Correct Drop
    if (item.type === zoneType) {
      setScore(score + 1);
      // If the item was previously in the wrong list, remove it.
      // This effectively "decrements" the wrong count.
      setWronglyPlacedItems((prev) => prev.filter((i) => i.name !== item.name));
    }
    // Incorrect Drop
    else {
      setWronglyPlacedItems((prev) => [...prev, item]); // Add to wrong list
      const audio = new Audio(item.audio);
      audio.play();
    }
    // Remove the item from the main list so it can't be dragged again
    setItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  // NEW: Function to handle the "Redo" button click
  const handleRedo = (itemToRedo) => {
    // Remove the item from the wrong list
    setWronglyPlacedItems((prev) => prev.filter((i) => i.name !== itemToRedo.name));
    // Add it back to the main list of items at the bottom
    setItems((prev) => [...prev, itemToRedo]);
  };


  return (
    <div className="game-container">
      <div className="header">
        <div className='buttonContainer'>
          <button onClick={() => navigate('/')} className='button'>Back to Home</button>
        </div>
        <div className="score-container">
          <h2 className="score">Score: {score}</h2>
          {/* The wrong count is now the length of the new array */}
          <h2 className="wrong-attempts">Wrong: {wronglyPlacedItems.length}</h2>
        </div>
      </div>

      <div className="zones">
        <DropZone type="healthy" onDrop={handleDrop} />

        {/* --- NEW: Area to display wrongly placed items with Redo buttons --- */}
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
    </div>
  );
};

export default SortingGame;