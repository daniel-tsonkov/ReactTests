import { useRef } from 'react';

const App = () => {
  const textInput = useRef();
  const triggerHandler = () => {
    console.log(textInput.current.value);
  };

  return (
    <>
      <h1>Form:</h1>
      <input type="text" ref={textInput} />
      <button onClick={triggerHandler}>Trigger</button>
    </>
  );
};

export default App;
