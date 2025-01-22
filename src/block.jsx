import { useEffect } from 'react';

const Block = () => {
  useEffect(() => {
    console.log('Block created');
  });
  return (
    <div style={{ backgroud: 'red', color: 'white', margin: '10px' }}>
      I am a block
    </div>
  );
};

export default Block;
