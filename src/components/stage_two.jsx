import { useContext } from 'react';
import { MyContext } from '../context';

const Stage2 = () => {
  const content = useContext(MyContext);

  return (
    <>
      <div className="result_wrapper">
        <h3>The looser is:</h3>
        {content.result}
      </div>
    </>
  );
};

export default Stage2;
