import { useState } from 'react';

const TransitionComp = () => {
  let [show, setShow] = useState(true);

  const showDiv = () => {
    setShow(!show);
  };

  return (
    <>
      {show ? (
        <div style={{ background: 'red', height: '100px' }}>Hello</div>
      ) : null}
      <hr />
      <button className="btn btn-primary" onClick={showDiv}>
        SHOW
      </button>
    </>
  );
};

export default TransitionComp;
