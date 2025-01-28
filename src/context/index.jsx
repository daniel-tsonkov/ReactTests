import { useState, createContext } from 'react';

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState('');

  const addPlayerHandler = (name) => {
    setPlayers((prevState) => [...prevState, name]);
  };

  const removePlayerHandler = (idx) => {
    let newArray = [...players];
    newArray.splice(idx, 1);

    setPlayers(newArray);
  };

  const nextHandler = () => {
    if (players.length < 2) {
    } else {
      setStage(2);
      generateLooser();
    }
  };

  const generateLooser = () => {
    let result = players[Math.floor(Math.random() * players.length)];
    setResult(result);
  };

  return (
    <>
      <MyContext.Provider
        value={{
          stage: stage,
          players: players,
          result: result,
          addPlayer: addPlayerHandler,
          removePlayer: removePlayerHandler,
          next: nextHandler,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
};

export { MyContext, MyProvider };
