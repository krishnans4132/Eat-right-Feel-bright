import { useNavigate } from 'react-router-dom';

const HowToPlay = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>How to Play</h2>
      <p style={styles.text}>
        Drag and drop the food items into the correct category: <strong>Healthy</strong> or
        <strong> Unhealthy</strong>. If you place an item incorrectly, you’ll hear an audio clue to help
        you learn. Try to sort all foods correctly!
      </p>
      <button style={styles.button} onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'var(--font-montserrat)',
    backgroundColor: 'var(--color-bg)',
    color: 'var(--color-dark)',
    height: '100vh',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
  },
  button: {
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    cursor: 'pointer',
  },
};

export default HowToPlay;