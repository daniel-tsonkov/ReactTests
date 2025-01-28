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
      <div className="action_button" onClick={() => content.resetGame()}>
        RESET
      </div>
      <div
        className="action_button btn_2"
        onClick={() => content.getNewLooser()}
      >
        GET NEW LOOSER
      </div>
      <div
        className="action_button btn_3"
        onClick={() => content.addNewLooser()}
      >
        ADD NEW LOOSER
      </div>
    </>
  );
};

export default Stage2;
