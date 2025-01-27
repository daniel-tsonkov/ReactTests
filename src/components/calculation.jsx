import { useState } from 'react';

const Calculation = () => {
  const [blocks, addBlocks] = useState([1, 52, 14]);
  return (
    <>
      <h3>Blocks</h3>
      {blocks.map((block, index) => (
        <div key={index}>{block}</div>
      ))}
    </>
  );
};

export default Calculation;
