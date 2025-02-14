import axios from 'axios';
import { response } from 'express';

const App = () => {
  const addUser = () => {
    axios
      .get('/api/users')
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => {
        console.log('err');
      });
  };

  return (
    <>
      <div className="App">
        <button onClick={() => addUser()}>Add user</button>
      </div>
    </>
  );
};

export default App;
