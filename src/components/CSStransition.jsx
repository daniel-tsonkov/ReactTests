import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CssTr = () => {
  let [show, setShow] = useState();

  const showDiv = () => {
    setShow(!show);
  };

  return (
    <CSSTransition>
      <div>HELLO!!!</div>
    </CSSTransition>
  );
};

export default CssTr;
