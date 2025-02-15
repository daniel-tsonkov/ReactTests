import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  let [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('/api/getcars').then((response) => {
      setCars(response.data);
    });
  }, []);
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

  return (
    <>
      <div className="App">
        <h1>Add car </h1>
        <button onClick={() => onCarSubmit()}>Add car</button>

        <hr />
        {cars.map((car) => (
          <div key={car._id}>{car.brand}</div>
        ))}
      </div>
    </>
  );
};

export default App;
