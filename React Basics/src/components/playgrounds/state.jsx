import { useState } from 'react';

export default function statePlayground() {
  let [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const restOne = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>Count:{count}</h3>
      <button onClick={addOne}>add</button>
      <button onClick={restOne}>rest</button>
    </>
  );
}
