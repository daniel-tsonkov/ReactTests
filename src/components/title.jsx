import { memo } from 'react';

const Title = () => {
  console.log('1 - Title');

  return (
    <>
      <h1>App title</h1>
      <hr />
    </>
  );
};

export default memo(Title);
