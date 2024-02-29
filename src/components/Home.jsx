import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>It's efF1ng Racing</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
export default Home;
