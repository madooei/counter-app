import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count changed to:", count);
  }, [count]);

  function increment() {
    setCount(count + 1); 
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>−</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
