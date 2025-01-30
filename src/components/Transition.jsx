import { useState } from 'react';

const TransitionComp = () => {
  let [show, setShow] = useState(true);
  return <>{show ? <div style={{ background: 'red' }}></div> : null}</>;
};

export default TransitionComp;
