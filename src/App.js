import { useState } from 'react';
import './App.css';
import PatientHistory from './components/PatientHistory';

function App() {
  const [hovered, setHovered] = useState(false);
  console.log(hovered);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="App">
      <div className="heart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {hovered ? <p>TE AMO❤︎</p> : <p>❤︎</p>}
      </div>
      <PatientHistory />
    </div>
  );
}

export default App;
