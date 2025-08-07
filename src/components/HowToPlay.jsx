import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './HowToPlay.css';

const HowToPlay = () => {
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

  const playInstructionAudio = () => {
    const audio = new Audio('/assets/audios/howtoplay.mp3');
    audio.play();
  };

  return (
    <div className="how-to-play-container">
      <div className="how-to-play-main-content">
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

    
      <footer className="how-to-play-footer">
        <p>You can press the <strong>`Esc`</strong> key at any time during the game to return to the home screen.</p>
      </footer>
    </div>
  );
};

export default HowToPlay;