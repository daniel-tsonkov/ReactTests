import axios from 'axios';

const App = () => {
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
    axios.post('/api/addcar', {
      brand: String,
      model: String,
      year: Number,
      avail: Boolean,
    });
  };

  return (
    <>
      <div className="App">
        <h1>Add car </h1>
        <button onClick={() => onCarSubmit()}>Add car</button>
      </div>
    </>
  );
};

export default App;
