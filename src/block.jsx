import { useEffect } from 'react';

const Block = () => {
  useEffect(() => {
    console.log('Block created');

    return () => {
      console.log('Block removed');
    };
  });

  return (
    <div
      style={{
        backgroundColor: 'red',
        color: 'white',
        margin: '10px',
      }}
    >
      I am a block
    </div>
  );
};

export default Block;
