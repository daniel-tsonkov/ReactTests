import { useState } from 'react';
import { Transition } from 'react-transition-group';

const TransitionComp = () => {
  let [show, setShow] = useState(false);

  const showDiv = () => {
    setShow(!show);
  };

  return (
    <>
      <Transition in={show} timeout={2000}>
        {(state) => (
          <div
            className={`square square-${state}`}
          >{`square square-${state}`}</div>
        )}
      </Transition>
      <hr />
      <button className="btn btn-primary" onClick={showDiv}>
        SHOW
      </button>
    </>
  );
};

export default TransitionComp;
