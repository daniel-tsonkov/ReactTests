import { memo } from 'react';

const Age = ({ age }) => {
  console.log('4 - Age');

  return (
    <>
      <h3>My age: {age}</h3>
    </>
  );
};

export default memo(Age);
