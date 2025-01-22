import { useState } from 'react';
import Title from './components/title';
import Count from './components/count';
import CountBtn from './components/countBtn';

const App = () => {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(10);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={handleCount} />
    </>
  );
};

export default App;
