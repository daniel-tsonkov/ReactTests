// export default function App() {
//   return (
//     <>
//       <h3>Count: 3</h3>
//     </>
//   );
//just upload and again
import { useState, useEffect } from 'react';
import BlockComponent from './block';

const App = () => {
  let [count, setCount] = useState(0);
  let [block, setBlock] = useState(false);

  const addOne = () => setCount(count + 1);
  const restOne = () => setCount(count - 1);
  const setZero = () => setCount(0);

  useEffect(() => {});

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={restOne}>-1</button>
      <button onClick={setZero}>Reset</button>
      <hr/>
      {block ? <BlockComponent/> : null}
      <button onClick={{block ? setBlock(false) : setBlock(true)}}>Block</button>
    </>
  );
};

export default App;
