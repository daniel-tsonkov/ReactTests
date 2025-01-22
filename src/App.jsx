import { useState } from 'react';
import Title from './components/title';
import Count from './components/count';

const App = () => {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(10);

  return (
    <>
      <Title />
      <Count count={count} />
    </>
  );
};

export default App;
