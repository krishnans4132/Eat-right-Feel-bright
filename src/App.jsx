
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import SortingGame from './components/SortingGame';
import HowToPlay from './components/HowToPlay';
import './vars.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/game" element={<SortingGame />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </Router>
  );
}

export default App;

