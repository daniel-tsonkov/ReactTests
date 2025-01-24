import { memo } from 'react';

const Count = ({ count }) => {
  console.log('2 - Count');

  return (
    <>
      <h3>My count: {count}</h3>
    </>
  );
};

export default memo(Count);
