import { useNavigate } from 'react-router-dom';
import './Landingpage.css'; // Import the new CSS file

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 onClick={() => navigate('/')} className="landing-title">
        ★ Eat Right, Feel Bright ★
      </h1>
      <div className="landing-button-container">
        <button onClick={() => navigate('/game')} className="landing-button">
          Start Sorting
        </button>
        <button onClick={() => navigate('/how-to-play')} className="landing-button">
          How to Play
        </button>
      </div>
    </div>
  );
};

export default Landingpage;