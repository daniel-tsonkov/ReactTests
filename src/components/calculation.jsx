import { useState } from 'react';

const Calculation = () => {
  const [calc, setCalc] = useState(0);
  const [blocks, addBlocks] = useState([1, 52, 14]);

  const addBlockHandler = () => {
    addBlocks((prevState) => [...prevState, Math.floor(Math.random() * 100)]);
  };

  const calculate = () => {
    let random = Math.floor(Math.random() * 100);
    setCalc(random);
  };

  return (
    <>
      <h3>Blocks</h3>
      {blocks.map((block, index) => (
        <div key={index}>{block}</div>
      ))}
      <button onClick={addBlockHandler}>Add block</button>
      <hr />
      calc:{calc}
      <button onClick={calculate}>+</button>
    </>
  );
};

export default Calculation;
