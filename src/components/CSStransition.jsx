import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CssTr = () => {
  let [show, setShow] = useState();

  const showDiv = () => {
    setShow(!show);
  };

  return (
    <>
      <CSSTransition in={show} timeout={500} classNames="cssSq">
        <div className="cssSq">HELLO!!!</div>
      </CSSTransition>
      <hr />
      <button className="btn btn-primary" onClick={showDiv}>
        Show
      </button>
    </>
  );
};

export default CssTr;
