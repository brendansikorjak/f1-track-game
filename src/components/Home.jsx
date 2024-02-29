import { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        🏁 It's ef<span className="f1">F1</span>ng Racing 🏎️
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
export default Home;
