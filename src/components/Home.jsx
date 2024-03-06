import { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };
  return (
    <>
      <h1>
        🏁 It's ef
        <button className="f1" onClick={handleButtonClick}>
          F1
        </button>
        ng Racing{' '}
        <span className={isAnimating ? 'slide-out-blurred-left' : ''}>🏎️</span>
        {/* <span className="slide-out-blurred-left">🏎️</span> */}
      </h1>
      <div className="racetrack">
        <h1 className="racecar">🏎️</h1>
      </div>
    </>
  );
}
export default Home;
