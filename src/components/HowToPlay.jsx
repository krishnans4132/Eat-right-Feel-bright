import { useNavigate } from 'react-router-dom';
import './HowToPlay.css'; // Import the new CSS file

const HowToPlay = () => {
  const navigate = useNavigate();

  const playInstructionAudio = () => {
    // Make sure your audio file is in the public folder
    const audio = new Audio('/assets/audios/howtoplay.mp3');
    audio.play();
  };

  return (
    <div className="how-to-play-container">
      <h2 className="how-to-play-heading">How to Play</h2>
      <p className="how-to-play-text">
        Drag and drop the food items into the correct category: <strong>Healthy</strong> or
        <strong> Unhealthy</strong>. If you place an item incorrectly, you’ll hear an audio clue to help
        you learn. Try to sort all foods correctly!
      </p>
      <div className="how-to-play-button-container">
        <button className="how-to-play-button" onClick={playInstructionAudio}>
          Play Audio
        </button>
        <button className="how-to-play-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default HowToPlay;