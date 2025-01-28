import { useState, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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
      toast.error('More players', {
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setStage(2);
      generateLooser();
    }
  };

  const generateLooser = () => {
    let result = players[Math.floor(Math.random() * players.length)];
    setResult(result);
  };

  const resetGameHandler = () => {
    setStage(1);
    setPlayers([]);
    setResult('');
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
          resetGame: resetGameHandler,
        }}
      >
        {props.children}
      </MyContext.Provider>
      <ToastContainer />
    </>
  );
};

export { MyContext, MyProvider };
