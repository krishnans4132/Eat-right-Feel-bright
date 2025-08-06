// src/components/Landingpage.jsx
import { useNavigate } from 'react-router-dom';


const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 onClick={() => navigate('/')} style={styles.title}>
        Eat Right, Feel Bright
      </h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate('/game')} style={styles.button}>Start Sorting</button>
        <button onClick={() => navigate('/how-to-play')} style={styles.button}>How to Play</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-montserrat)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    cursor: 'pointer',
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  button: {
    padding: '1rem 2rem',
    backgroundColor: 'var(--color-primary)',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Landingpage;
