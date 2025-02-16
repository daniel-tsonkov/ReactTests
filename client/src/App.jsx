import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    axios.get('/api/getcars').then((response) => {
      setCars(response.data);
    });
  };

  //   const addUser = () => {
  //     axios
  //       .get('/api/users')
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch(() => {
  //         console.log('err');
  //       });
  //   };

  const onCarSubmit = () => {
    axios
      .post('/api/addcar', {
        brand: 'Ford4',
        model: 'Focus',
        year: 2000,
        avail: true,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const onCarRemove = () => {
    axios
      .post('/api/removecar', {
        brand: 'Ford4',
      })
      .then((response) => {
        getCars();
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="App">
        <h1>Add car </h1>
        <button onClick={() => onCarSubmit()}>Add car</button>

        <hr />
        {cars.map((car) => (
          <div key={car._id}>{car.brand}</div>
        ))}

        <hr />
        <h2>Remove elements</h2>
        <button onClick={() => onCarRemove()}>Delete car</button>
      </div>
    </>
  );
};

export default App;
