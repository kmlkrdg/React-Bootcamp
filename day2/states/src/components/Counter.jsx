import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);

    setCount(1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;
