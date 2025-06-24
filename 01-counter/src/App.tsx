import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleSubstract = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  
  return (
    <>
      <h1>Counter app</h1>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleSubstract}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
