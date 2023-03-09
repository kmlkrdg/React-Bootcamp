import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval çalıştı');
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   console.log('count state değişti');
  // }, [count]);

  // useEffect(() => {
  //   console.log('amount state değişti');
  // }, [amount]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + amount)}>Click</button>

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;
