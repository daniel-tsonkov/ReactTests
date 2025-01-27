import { useState, createContext } from 'react';

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  return (
    <>
      <MyContext.Provider>{props.children}</MyContext.Provider>
    </>
  );
};
