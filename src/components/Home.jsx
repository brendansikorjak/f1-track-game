import { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <h1>
        🏁 It's ef<span className="f1">F1</span>ng Racing
        <span className="slide-out-blurred-left">🏎️</span>
      </h1>
      <div className="racetrack">
        <h1 className="racecar">🏎️</h1>
      </div>
    </>
  );
}
export default Home;
