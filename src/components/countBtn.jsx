import { memo } from 'react';

const CountBtn = ({ handleCount }) => {
  console.log('3 - Btn count');

  return (
    <>
      <button onClick={handleCount}>Increment count</button>
    </>
  );
};

export default memo(CountBtn);
